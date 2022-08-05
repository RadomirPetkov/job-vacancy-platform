import { useState } from "react"
import "./Register.css"

export const Register = () => {

    const [userData, setUserData] = useState({
        email: '',
        name: '',
        password: '',
        accountType: 'jobseeker',
        gender: "male"
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

    const submitHandler = (e) => {
        e.preventDefault()
        
    }

    return <div className="registration-body">
        <div className="main-login-block">
            <h1 className="registration-header">Registration</h1>
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
                        By clicking Register, you agree on our Privacy Policy for W3Docs
                    </p>
                    <button className="submit-login" type="submit" href="/">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div >
}
