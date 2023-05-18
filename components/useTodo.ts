import { gql, useMutation } from '@apollo/client';
import useSWR from "swr";

const CREATE_TODO = gql`
    mutation CreateTodo($text: String) {
        createTodo(text: $text) {
            done
            id
            text
        }
    }
`

const REMOVE_TODO = gql`
    mutation RemoveTodo($id: String) {
        removeTodo(id: $id) {
            done
            id
            text
        }
    }
`

const UPDATE_TODO = gql`
    mutation UpdateTodo($id: String, $text: String, $done: Boolean) {
        updateTodo(id: $id, text: $text, done:$done) {
            done
            id
            text
        }
    }
`

const GET_TODOS = `
    query Query {
        getTodoAll {
            done
            id
            text
            deletedAt
        }
    }
`

const fetcher = async (query: string) => {
    const response = await fetch("/api/graphql", {
      body: JSON.stringify({ query }),
      headers: { "Content-type": "application/json" },
      method: "POST"
    });
    const { data } = await response.json();
    return data;
};

export default function useTodo(){

    // using swr to revalidate is better than using pollInterval
    const { data, error, isLoading, mutate } = useSWR(GET_TODOS, fetcher)

    // const { data, loading, error } = useQuery(GET_TODOS,{
    //     pollInterval: 30000,
    //     // fetchPolicy: 'cache-first', // Used for first execution
    //     // nextFetchPolicy: 'cache-first', // Used for subsequent executions
    // });
    
    const [
        createTodo, 
        { loading:createLoading, error:createError }
    ] = useMutation(CREATE_TODO,{
        // refetchQueries: [{ query: GET_TODOS }]
        onCompleted: () => mutate()
    });

    const [
        removeTodo, 
        { loading:removeLoading, error:removeError }
    ] = useMutation(REMOVE_TODO,{
        // refetchQueries: [{ query: GET_TODOS }]
        onCompleted: () => mutate()
    });

    const [
        updateTodo, 
        { loading:updateLoading, error:updateError }
    ] = useMutation(UPDATE_TODO,{
        // refetchQueries: [{ query: GET_TODOS }]
        onCompleted: () => mutate()
    });

    const update = async (id: string, text:string, done: boolean) => {
        await updateTodo({ variables: { id, text, done } })
    }

    const remove = async (id: string) => {
        await removeTodo({ variables: { id } })
    }

    const add = async ( text: string ) => {
        await createTodo({ variables: { text } })
    }

    return {
        todos: data?.getTodoAll,
        loading: isLoading,
        error,
        createLoading,
        createError,
        update,
        remove,
        add
    }

}