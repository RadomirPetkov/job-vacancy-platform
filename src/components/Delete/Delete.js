import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import * as requester from "../../services/requester"


export const Delete = () => {
    const navigate = useNavigate()
    const { offerId } = useParams()
    const { user } = useContext(AuthContext)
    const accessToken = user.accessToken
    console.log(accessToken);

    useEffect(() => {
        try {
            requester.del(`/data/jobOffers/${offerId}`, "", accessToken)
                .then(console.log(`The offer was successfuly deleted`))
                .then(navigate(`/catalog`))

        } catch (error) {

        }
    }, [])

    return null
}