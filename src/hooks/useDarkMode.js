import { React, useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import { AST_StatementWithBody } from "terser";

const useDarkMode = () => {

    const [darkModeStatus, setDarkModeStatus] = useLocalStorage('Dark Mode Enabled?')

    useEffect(() => {
        if (darkModeStatus === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkModeStatus])

    return [darkModeStatus, setDarkModeStatus]
}

export default useDarkMode