
import * as useApi from "../../../hooks/useApi"
import { LatestJobOffer } from "./LatestJobOffer/LatestJobOffer";

export const LatestJobOffers = () => {

    const { loading, data } = useApi.get(`GET`, `/data/jobOffers`)

    return <section id="introblocks">
        <ul className="nospace group btmspace-80">

            {loading ? <h1>Loading</h1> : data.map(offer => <LatestJobOffer key={offer._id} offer={offer} />)}

        </ul>
    </section>
}




