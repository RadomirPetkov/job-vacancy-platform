import { useEffect, useState } from "react"

export const useSetUser = () => {
    const [user, setUser] = useState()
    const localStorageUser = localStorage.getItem(`user`)

    useEffect(() => {
        if (localStorageUser) {
            setUser(JSON.parse(localStorageUser))
        }
    }, [])



    return [user, setUser]

}