import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"

export const Logout = () => {
    const navigate = useNavigate()
    const { user, setUser, setProfileData } = useContext(AuthContext)
    const accessToken = user.accessToken

    useEffect(() => {
        requester.logout(accessToken)
            .then(localStorage.clear())
            .then(console.log(`Logged out successfully`))
        setUser({})
        setProfileData({})
        navigate(`/`)
    }, [])


    return null
}