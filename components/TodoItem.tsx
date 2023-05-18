import { ChangeEvent, useState, useRef, useEffect } from 'react'

const useDebounce = ( n = 500 ) => {
    
    const timeout = useRef<ReturnType<typeof setTimeout>|null>()

    const debounce = ((fn: Function) => {
        if(timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            fn()
        },n)
    })

    return debounce

}

export default function TodoItem({
    item,
    onChange,
    onRemove
}:{
    item: { id: string, text: string, done: boolean },
    onChange: (id: string, text: string, done: boolean) => void,
    onRemove: (id: string) => void
}){

    const { id, text, done } = item

    const [ isDone, setIsDone ] = useState(done)
    const [ textContent, setTextContent ] = useState(text)
    const [ visible, setVisible ] = useState(true)
    const debounce = useDebounce()


    // remote changes should be addressed
    useEffect(() => {
        if(done!==isDone) setIsDone(done)
    },[done])

    useEffect(() => {
        if(text!==textContent) setTextContent(text)
    },[text])


    //
    const remove = () => {
        setVisible(false)
        try{ onRemove(id) }catch(e){
            setVisible(true)
        }
    }

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const textVal = e.target.value
        setTextContent(textVal)
        debounce(() => { onChange(id, textVal, done) })
    }

    const onChangeDone = (e: ChangeEvent<HTMLInputElement>) => {
        const doneVal = !!e.target.checked
        setIsDone(doneVal)
        onChange(id, text, doneVal)
    }

    return visible ? <div className="flex my-5">
        <div className="grid content-center">
            <input type="checkbox" 
                checked={isDone} 
                onChange={onChangeDone}
                className="checkbox" />
        </div>
        <input
            disabled={isDone}
            value={textContent} 
            type="text" 
            placeholder="Update todo here" 
            className="input input-bordered flex-auto mx-3 min-w-[200px]" 
            onChange={onChangeText}
        />
        <button
            onClick={remove} 
            className="btn btn-accent flex-none text-2xl">&times;</button>
    </div> : null


}