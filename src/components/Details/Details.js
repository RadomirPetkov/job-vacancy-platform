import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"


export const Details = () => {
    const { user, profileData, setProfileData, saveProfileInfoToLocalStorage } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState('')
    const { offerId } = useParams()
    const [offer, setOffer] = useState({})
    const [showApplicants, setShowApplicants] = useState(false)
    const [applicants, setApplicants] = useState([])

    let hadApllied = false

    useEffect(() => {
        if (user) {
            user.accountType == "jobseeker" ? setCurrentUser("jobseeker") : setCurrentUser("company")
        }
    }, [])

    if (profileData) {
        if (profileData?.applications) {

            hadApllied = profileData.applications.includes(offerId)
        } else { profileData.applications = [] }
    }

    useEffect(() => {
        requester.get(`/data/jobOffers/${offerId}`)
            .then(response => { setOffer(response) })


    }, [])

    const applyHandler = () => {
        const newProfileData = { ...profileData, "applications": [...profileData.applications, offerId] }
        requester.put(`/data/usersInfo/${profileData._id}`, newProfileData, user.accessToken)
            .then(() => {
                setProfileData(newProfileData)
                saveProfileInfoToLocalStorage(newProfileData)
            })


    }

    const seeApplicantsHandler = () => {
        requester.get(`/data/usersInfo`)
            .then(res => {
                setApplicants(res.filter(x => x.applications?.includes(offerId)))
                setShowApplicants(!showApplicants)
            })
    }


    return <div
        className="bgded overlay"
        style={{ backgroundImage: 'url("images/demo/backgrounds/02.png")' }}
    >
        <section id="" className="hoc container clear details-section">
            <div className="sectiontitle">
                <p className="nospace font-xs">This job offer is provided by:</p>
                <p className="heading underline font-x2">{offer.ownerName}</p>
                <p> <img className='' src={offer.imageUrl} alt="" /></p>
            </div>
            <div
                className="bgded clear"
                style={{ backgroundImage: 'url("images/demo/backgrounds/03.png")' }}
            >

                <article>
                    <h5 >Job position: <b>{offer.possition}</b></h5>
                    <h5>Your responsibilities:</h5>
                    <p> {offer.summary}</p>
                    <h5>Our requirements:</h5>
                    <p> {offer.requirements}</p>
                    <h5>Salary:</h5>
                    <p> {offer.salary}</p>
                    <h5>Available possitions:</h5>
                    <p> There are currently {offer.vacancies} available possitions</p>


                    <footer>
                        {
                            currentUser == "company" && user?._id == offer?._ownerId && <>
                                <Link className="btn" to={`/edit/${offerId}`}>
                                    Edit
                                </Link>
                                <Link className="btn" to={`/delete/${offerId}`} >
                                    Delete
                                </Link>
                                <hr />
                                <button className="details-button" onClick={seeApplicantsHandler} >See applicants</button>

                                {showApplicants ?
                                    <div className="">
                                        {applicants.map(x => < p key={x._id} className="applicants">
                                            <span id="profile-span"> {x.name} </span>
                                            <Link to={`/profile/${x._ownerId}`}><button id="btn-profile" >See offer</button></Link>
                                        </p>)
                                        }
                                    </div>
                                    : null}
                            </>

                        }
                        {currentUser == "jobseeker" && !hadApllied && <a className="btn" onClick={applyHandler}>
                            Apply
                        </a>}
                        {currentUser == "jobseeker" && hadApllied && <p >
                            You have already applied for this job offer
                        </p>}

                    </footer>
                </article>

            </div>
        </section >
    </div >
}