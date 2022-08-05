import { useEffect, useState } from "react"

export const useApi = (method, url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const baseUrl = `http://localhost:3030`


    const fetchApi = () => {
        fetch(`${baseUrl}${url}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setData(json)
            })
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }
}

export const get = useApi.bind(`GET`)
export const put = useApi.bind(`PUT`)
export const del = useApi.bind(`DELETE`)
export const post = useApi.bind(`POST`)