import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"


export const Details = () => {
    const { user } = useContext(AuthContext)
    const { offerId } = useParams()
    const [offer, setOffer] = useState({})

    useEffect(() => {
        requester.get(`/data/jobOffers/${offerId}`)
            .then(response => { setOffer(response) })


    }, [])
    console.log(offer);
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
                        <a className="btn" href="#">
                            Fermentum felis
                        </a>
                    </footer>
                </article>

            </div>
        </section>
    </div>
}