import { useContext, useState } from 'react'
import "./Login.css"
import * as requester from "../../services/requester"
import { AuthContext } from '../../contexts/authContext'
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const { setUser, saveUserToLocalStorage, saveProfileInfoToLocalStorage } = useContext(AuthContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)

    const changeHandler = (e) => {
        setUserData((oldstate) => ({
            ...oldstate, [e.target.id]: e.target.value
        }))
    }


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const user = await requester.post(`/users/login`, userData)

            const encodedId = encodeURIComponent(`_ownerId="${user._id}"`)

            const profileData = await requester.get(`/data/usersInfo?where=${encodedId}`)
            saveProfileInfoToLocalStorage(profileData[0])

            saveUserToLocalStorage(user)
            setUser(user)
            navigate(`/`)

        } catch (error) {

            setError(true)

        }

    }
    return <div className="registration-body">
        <div className="main-login-block">
            <h1 className="registration-header">Login</h1>
            {error ? <p>Wrong email or password</p> : ""}

            <form id="login-form" action="/" onSubmit={submitHandler}>
                <hr />

                <hr />
                <label id="icon" htmlFor="name">
                    <i className="fas fa-envelope" />
                </label>
                <input
                    type="text"
                    name="name"
                    id="email"
                    placeholder="Email"
                    required=""
                    value={userData.email}
                    onChange={changeHandler} />


                <label id="icon" htmlFor="name">
                    <i className="fas fa-unlock-alt" />
                </label>

                <input
                    type="password"
                    name="name"
                    id="password"
                    placeholder="Password"
                    required=""
                    value={userData.password}
                    onChange={changeHandler}
                />
                <hr />


                <hr />
                <div className="btn-block">
                    <p className="registration-par">
                        If you don't have an account, you can Register from <Link id='reg-link' to={`/register`}>HERE</Link>
                    </p>
                    <button className="submit-login" type="submit" href="/">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div >
}