import { useState } from 'react'

const items = [
    {
        id: 'asdf',
        text: 'asdf',
        done: false
    },
    {
        id: 'zxcv',
        text: 'zxcv',
        done: true
    }
]

export default function useTodo(){

    const [ todos, setTodos ] = useState(items)

    const update = async (id: string, text:string, done: boolean) => {
        const idx = todos.findIndex(v => v.id === id)
        if(idx === -1) return;
        setTodos([
            ...todos.slice(0,idx),
           { id, text, done }, 
            ...todos.slice(idx+1),
        ])
    }

    const remove = async (id: string) => {
        const idx = todos.findIndex(v => v.id === id)
        if(idx === -1) return;
        setTodos([
            ...todos.slice(0,idx),
            ...todos.slice(idx+1),
        ])
    }

    const add = async ( text: string ) => {
        setTodos([
            { 
                id: String(Math.random()*9999999),
                done: false,
                text 
            },
            ...todos,
        ])
    }

    return {
        todos,
        update,
        remove,
        add
    }

}