const baseUrl = "http://localhost:3030"

export const request = async (method, url, data, accessToken) => {
     
    try {
        let buildRequrest


        let headers = {
            "content-type": "application/json",
        }
        if (accessToken) {
            headers["X-Authorization"] = accessToken
        }

        if (method == "GET") {
            buildRequrest = fetch(`${baseUrl}${url}`, { headers })
        } else {
            buildRequrest = fetch(`${baseUrl}${url}`, {
                method,
                headers,
                body: JSON.stringify(data)
            })
        }


        const response = await buildRequrest
        
        let res
        
        
        if (response.status !== 204) { res = await response.json() }
        if (response.status == 403) { throw new Error (`Wrong email or password`) }
        if (response.status == 409) { throw new Error (`A user with the same email already exists`) }

        return res

    } catch (error) {
        
        throw new Error(error)
    }

}

export const get = request.bind({}, "GET")
export const put = request.bind({}, "PUT")
export const del = request.bind({}, "DELETE")
export const post = request.bind({}, "POST")
export const logout = request.bind({}, "GET", "/users/logout", "",)
