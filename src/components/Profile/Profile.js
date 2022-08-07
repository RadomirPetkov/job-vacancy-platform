import "./profile.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"
import { useParams } from "react-router-dom"

export const Profile = () => {
    const [editMode, setEditMode] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        adress: '',
        imageUrl: '',
        additionalInfo: ''
    })
    const { userId } = useParams()
    const { user } = useContext(AuthContext)


    useEffect(() => {
        const encodedId = encodeURIComponent(`_ownerId="${userId}"`)

        requester.get(`/data/usersInfo?where=${encodedId}`)
            .then(res => setUserInfo({ ...Object.assign(userInfo, res[0]) }))

    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        if (editMode) (
            requester.put(`/data/usersInfo/${userInfo._id}`, userInfo, user.accessToken)
        )
        setEditMode(oldValue => !oldValue)
    }

    const changeHandler = (e) => {
        setUserInfo((oldState) => (
            { ...oldState, [e.target.name]: e.target.value }
        ))


    }
    return <>
        <div className="container">
            <div className="main-body">

                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        alt="Admin"
                                        className="rounded-circle"
                                        width={150}

                                    />
                                    <div className="mt-3">
                                        <h4>{userInfo.name}</h4>

                                        {editMode ?
                                            <input name="additionalInfo" value={userInfo.additionalInfo} onChange={changeHandler}></input>
                                            :
                                            userInfo.additionalInfo != "" ?
                                                <p className="text-secondary mb-1">{userInfo.additionalInfo}</p>
                                                :
                                                <p className="text-secondary mb-1">Add additional info...</p>

                                        }
                                        {!editMode && <button className="btn btn-primary" onClick={submitHandler}>Edit profile</button>}
                                        {editMode && <button className="btn btn-primary" onClick={submitHandler}>Save changes</button>}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    {editMode ?
                                        <input name="name" value={userInfo.name} onChange={changeHandler}></input>
                                        :
                                        <div className="col-sm-9 text-secondary">{userInfo.name}</div>
                                    }

                                </div>
                                <hr />



                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    {editMode ?
                                        <input name="email" value={userInfo.email} onChange={changeHandler}></input>
                                        :
                                        <div className="col-sm-9 text-secondary">{userInfo.email}</div>

                                    }
                                </div>
                                <hr />



                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>

                                    {editMode ?
                                        <input name="phone" value={userInfo.phone} onChange={changeHandler}></input>
                                        :
                                        userInfo.phone != "" ?
                                            <div className="col-sm-9 text-secondary">{userInfo.phone}</div>
                                            :
                                            <div className="col-sm-9 text-secondary">...</div>
                                    }
                                </div>
                                <hr />



                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>

                                    {editMode ?
                                        <input name="adress" value={userInfo.adress} onChange={changeHandler}></input>
                                        :
                                        userInfo.adress != "" ?
                                            <div className="col-sm-9 text-secondary">
                                                {userInfo.adress}
                                            </div>
                                            :
                                            <div className="col-sm-9 text-secondary">
                                                ...
                                            </div>
                                    }

                                </div>
                                <hr />



                            </div>
                        </div>
                        <div className="row gutters-sm">
                            <div className="col-md">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="d-flex align-items-center mb-3">
                                            <i className="material-icons text-info mr-2">applied for the follow job offers</i>
                                        </h6>

                                        <div className="applications">
                                            <p className="profile-par">
                                                <a id="profile-span" href="/">Name of job offer</a>
                                                <button id="btn-profile" >See offer</button>
                                            </p>
                                        </div>

                                        <div className="applications">
                                            <p className="profile-par">
                                                <a id="profile-span" href="/">Name of job offer</a>
                                                <button id="btn-profile" >See offer</button>
                                            </p>
                                        </div>
                                        <div className="applications">
                                            <p className="profile-par">
                                                <a id="profile-span" href="/">Name of job offer</a>
                                                <button id="btn-profile" >See offer</button>
                                            </p>
                                        </div>  <div className="applications">
                                            <p className="profile-par">
                                                <a id="profile-span" href="/">Name of job offer</a>
                                                <button id="btn-profile" >See offer</button>
                                            </p>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}