import { gql, useQuery, useMutation } from '@apollo/client';

const GET_TODOS = gql`
    query Query {
        getTodoAll {
            done
            id
            text
            deletedAt
        }
    }
`

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

export default function useTodo(){

    const { data, loading, error } = useQuery(GET_TODOS,{
        pollInterval: 30000,
        // fetchPolicy: 'cache-first', // Used for first execution
        // nextFetchPolicy: 'cache-first', // Used for subsequent executions
    });
    
    const [
        createTodo, 
        { loading:createLoading, error:createError }
    ] = useMutation(CREATE_TODO,{
        refetchQueries: [{ query: GET_TODOS }]
    });

    const [
        removeTodo, 
        { loading:removeLoading, error:removeError }
    ] = useMutation(REMOVE_TODO,{
        refetchQueries: [{ query: GET_TODOS }]
    });

    const [
        updateTodo, 
        { loading:updateLoading, error:updateError }
    ] = useMutation(UPDATE_TODO,{
        refetchQueries: [{ query: GET_TODOS }]
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
        loading,
        error,
        createLoading,
        createError,
        update,
        remove,
        add
    }

}