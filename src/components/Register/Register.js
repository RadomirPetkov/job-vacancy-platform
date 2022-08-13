import { useState } from "react"
import "./Register.css"
import * as requester from "../../services/requester"
import { Link, useNavigate } from "react-router-dom"
import { checkData } from "../../services/authService"


export const Register = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        password: '',
        accountType: 'jobseeker',
        gender: "male"
    })
    const [error, setError] = useState({
        generalError: false,
        emailError: false,
        nameError: false,
        passwordError: false
    })

    const changeHandler = (e) => {
        setUserData((oldstate) => ({
            ...oldstate, [e.target.id]: e.target.value
        }))
    }

    const radioChangeHandler = (e) => {
        setUserData((oldState) => ({
            ...oldState, [e.target.name]: e.target.id
        }))

    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const isDataOK = checkData(userData, setError)


        if (isDataOK) {

            try {
                const user = await requester.post(`/users/register`, userData)
                const response = await requester.post(`/data/usersInfo`, user, user.accessToken)
                navigate(`/`)

            } catch (error) {
                console.log(error);
                setError(oldData => ({
                    ...oldData, generalError: error.message
                }))
            }
        }

    }

    return <div className="registration-body">
        <div className="main-login-block">
            <h1 className="registration-header">Registration</h1>

            {error.generalError ? <p className="error">{`${error.generalError}`}</p> : ""}

            <form id="login-form" action="/" onSubmit={submitHandler}>
                <hr />

                <div className="account-type">
                    <input
                        type="radio"
                        id="jobseeker"
                        name="accountType"
                        checked={userData.accountType == "jobseeker" ? "checked" : ""}
                        onChange={radioChangeHandler}



                    />
                    <label htmlFor="jobseeker" className="radio">
                        Jobseeker
                    </label>

                    <input
                        type="radio"
                        defaultValue="none"
                        id="company"
                        name="accountType"
                        onChange={radioChangeHandler}
                    />
                    <label htmlFor="company" className="radio">
                        Company
                    </label>
                </div>
                <hr />
                {error.emailError ? <p className="error">{`${error.emailError}`}</p> : ""}

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


                {error.nameError ? <p className="error">{`${error.nameError}`}</p> : ""}

                <label id="icon" htmlFor="name">
                    <i className="fas fa-user" />
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required=""
                    value={userData.name}
                    onChange={changeHandler}
                />

                {error.passwordError ? <p className="error">{`${error.passwordError}`}</p> : ""}

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
                {userData.accountType === "jobseeker" && <><div className="gender">
                    <input
                        type="radio"
                        defaultValue="none"
                        id="male"
                        name="gender"
                        onChange={radioChangeHandler}
                        checked={userData.gender == "male" ? "checked" : ""}
                    />

                    <><label htmlFor="male" className="radio" >
                        Male
                    </label>
                        <input
                            type="radio"
                            defaultValue="none"
                            id="female"
                            name="gender"
                            onChange={radioChangeHandler} />

                        <label htmlFor="female" className="radio">
                            Female
                        </label></>
                </div></>}


                <hr />
                <div className="btn-block">
                    <p className="registration-par">
                        If you already have an account, you can log in from <Link id="login-link" to={`/login`}>HERE</Link>
                    </p>
                    <button className="submit-login" type="submit" href="/">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div >
}
