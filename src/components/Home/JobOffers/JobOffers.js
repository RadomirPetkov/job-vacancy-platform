import { useEffect, useState } from "react";
import * as useApi from "../../../hooks/useApi"
import { JobOffer } from "./JobOffer/JobOffer";

export const JobOffers = () => {

    const { loading, data } = useApi.get(`GET`, `/data/jobOffers`)

    return <section id="introblocks">
        <ul className="nospace group btmspace-80">

            {loading ? <h1>Loading</h1> : data.map(offer => <JobOffer key={offer._id} offer={offer} />)}

        </ul>
    </section>
}




