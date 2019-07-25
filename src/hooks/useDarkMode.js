import { React, useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { AST_StatementWithBody } from "terser";

const useDarkMode = () => {

    const [darkModeStatus, setDarkModeStatus] = useLocalStorage(true)

    useEffect(() => {
        if (darkModeStatus === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [])
}

export default useDarkMode