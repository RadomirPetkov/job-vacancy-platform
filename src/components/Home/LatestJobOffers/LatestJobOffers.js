
import * as useApi from "../../../hooks/useApi"
import { LatestJobOffer } from "./LatestJobOffer/LatestJobOffer";

export const LatestJobOffers = () => {

    const { loading, responseData } = useApi.get(`GET`, `/data/jobOffers`)

    return <section id="introblocks">
        <ul className="nospace group btmspace-80">

            {loading
                ? <h1>Loading</h1>
                : responseData
                    .slice(-3)
                    .reverse()
                    .map(offer => <LatestJobOffer key={offer._id} offer={offer}
            />)}

        </ul>
    </section>
}




