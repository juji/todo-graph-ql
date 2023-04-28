import { FormEvent, useState } from 'react'

export default function TodoInput(
    { onCreate }:
    { onCreate: (text: string) => void }
){

    const [ text, setText ] = useState('')
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
                type="text" 
                placeholder="Create item here" 
                className="input input-bordered flex-auto mr-3" 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className="btn btn-primary flex-none">Add</button>
        </div>
        <br />
        <div className="divider"></div> 
        <br />
    </form>

}