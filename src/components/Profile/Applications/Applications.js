import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as requester from "../../../services/requester"

export const Applications = ({ offerId }) => {
    const [offerInfo, setOfferInfo] = useState()

    useEffect(() => {
        requester.get(`/data/jobOffers/${offerId}`)
            .then(res => setOfferInfo(res))
    }, [])



    return <div className="applications">
        <p className="profile-par">
            <span id="profile-span"> Job possition <b>{offerInfo?.possition}</b> in <b>{offerInfo?.ownerName}</b></span>
            <Link to={`/details/${offerId}`}><button id="btn-profile" >See offer</button></Link>
        </p>
    </div>
}