import { useEffect, useState } from "react"

export const useApi = (method, url, data) => {
    const [responseData, setResponseData] = useState(null)
    const [loading, setLoading] = useState(true)
    const baseUrl = `http://localhost:3030`


    const fetchApiGet = (link) => {
        fetch(`${baseUrl}${url}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setResponseData(json)
            })
    };

    const fetchApiPost = (data) => {
        let headers = {
            "content-type": "application/json",
        }
        let accessToken = false
        if (accessToken) {
            headers["X-Authorization"] = accessToken
        }

        fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        if (method == "GET") {
            fetchApiGet();
        } else if (method == "POST") {
            fetchApiPost(data)
        }
    }, []);

    return { loading, responseData, fetchApiGet }
}

export const get = useApi.bind(`GET`)
export const put = useApi.bind(`PUT`)
export const del = useApi.bind(`DELETE`)
export const post = useApi.bind(`POST`)