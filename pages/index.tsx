

import Layout from "@/components/Layout"
import TodoInput from "@/components/TodoInput"
import TodoItem from "@/components/TodoItem"
import useTodo from '@/components/useTodo'


export default function Home() {

  const {
    todos,
    loading,
    error,
    update,
    remove,
    add
  } = useTodo()

  return (
      <Layout>

        <TodoInput onCreate={add} />

        { loading ? <p>Loading....</p> : 
          error ? <p className="text-red-600">{JSON.stringify(error)}</p> : 
          (todos||[]).map((v:{ id: string, text: string, done: boolean }) => {

            return <TodoItem 
              key={v.id} 
              item={v} 
              onChange={update} 
              onRemove={remove} />
  
          })
        }

      </Layout>
  )
}
