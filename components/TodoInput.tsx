import { FormEvent, useState } from 'react'

export default function TodoInput(
    { onCreate, createLoading }:
    { 
        onCreate: (text: string) => void 
        createLoading: boolean
    }
){

    const [ text, setText ] = useState('')
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!text) return;

        try{
            await onCreate(text)
            setText('')
        }catch(e){
            // do something ?
        }
    }

        

    return <form onSubmit={onSubmit}>
        <div className="flex">
            <input 
                disabled={!!createLoading}
                maxLength={255}
                type="text" 
                placeholder="Create item here" 
                className="input input-bordered flex-auto mr-3 min-w-[200px]" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button 
                type="submit"
                disabled={!!createLoading}
                className="btn btn-primary flex-none">Add</button>
        </div>
        <br />
        <div className="divider"></div> 
        <br />
    </form>

}