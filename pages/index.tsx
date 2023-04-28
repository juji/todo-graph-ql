

import Layout from "@/components/Layout"
import TodoInput from "@/components/TodoInput"
import TodoItem from "@/components/TodoItem"
import useTodo from '@/components/useTodo'


export default function Home() {

  const {
    todos,
    update,
    remove,
    add
  } = useTodo()

  return (
      <Layout>
        <TodoInput onCreate={add} />

        {todos.map(v => {

          return <TodoItem 
            key={v.id} 
            item={v} 
            onChange={update} 
            onRemove={remove} />

        })}

      </Layout>
  )
}
