
import { ChangeEvent, useState, useEffect } from 'react'

const getColorPreference = (
    storageKey: string, 
    lightTheme: string, 
    darkTheme: string
) => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? darkTheme
        : lightTheme
}

const setPreference = (storageKey: string, value: string) => {
    localStorage.setItem(storageKey, value)
}

const storageKey = 'theme'
const lightTheme = 'light'
const darkTheme = 'night'

export default function ThemeChooser({ className }:{className?: string}){

    const [ theme, setTheme ] = useState<string|null>(null)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.checked ? lightTheme : darkTheme
        setTheme(val)
        setPreference(storageKey, val)
    }

    useEffect(() => {
        if(
            typeof window !== 'undefined' &&
            typeof localStorage !== 'undefined'
        ) setTheme(getColorPreference(
            storageKey,
            lightTheme,
            darkTheme
        ))
    },[ typeof localStorage, typeof window ])

    useEffect(() => {
        if(typeof document === 'undefined') return () => {}
        const html = document.getElementsByTagName('html')
        html[0].setAttribute('data-theme', theme || darkTheme)
    },[ theme, typeof document ])

    return <div className={className}>
            <input type="checkbox" 
                className="toggle toggle-accent"
                onChange={onChange}
                checked={theme===lightTheme}
            />
        </div>


}