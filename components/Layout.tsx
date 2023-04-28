import { ReactNode } from 'react'
import ThemeChooser from "./utils/ThemeChooser"

export default function Layout({ children }: { children:ReactNode }){

    return <div className="container md mx-auto max-w-2xl">
        <div className='flex justify-between p-8'>
            <h1 className='text-3xl flex-initial'>Todo</h1>
            <ThemeChooser className='flex-initial' />
        </div>
        <div className='p-8'>
            {children}
        </div>
    </div>

}