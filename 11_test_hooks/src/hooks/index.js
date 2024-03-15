import { useEffect, useState } from "react";

function useLocalStorage(key) {
    const [data, setData] = useState(() => {
        const item = localStorage.getItem(key)
        if (!item) return ""
        return JSON.parse(item)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])
    return [data, setData]
}

export default useLocalStorage