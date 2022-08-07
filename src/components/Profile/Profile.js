import "./profile.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"
import { useParams } from "react-router-dom"

export const Profile = () => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        adress: '',
        imageUrl: '',
        additionalInfo: ''
    })
    const { userId } = useParams()

    useEffect(() => {

        requester.get(`/data/usersInfo?distinct=${userId}`)
            .then(res => setUserInfo({ ...Object.assign(userInfo, res[0]) }))

    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()

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

                                        {userInfo.additionalInfo != "" ?
                                            <p className="text-secondary mb-1">{userInfo.additionalInfo}</p>
                                            :
                                            <p className="text-secondary mb-1">Add additional info...</p>

                                        }
                                        <button className="btn btn-primary" onClick={submitHandler}>Edit profile</button>

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
                                    <div className="col-sm-9 text-secondary">{userInfo.name}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">{userInfo.email}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>

                                    {userInfo.phone != "" ?
                                        <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                                        :
                                        <div className="col-sm-9 text-secondary">...</div>
                                    }
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    {userInfo.adress != "" ?
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