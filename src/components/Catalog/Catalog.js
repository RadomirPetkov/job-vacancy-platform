import * as useApi from '../../hooks/useApi'
import { JobOffer } from './JonOffer/JobOffer';

export const Catalog = () => {

    const { loading, responseData } = useApi.get(`GET`, `/data/jobOffers`)

    return <div className="wrapper row3">
        <section className="hoc container clear">

            <div className="sectiontitle">
                <p className="heading underline font-x2">Here you can find all our job offers</p>
                <p className="nospace font-xs">Click read more button to find details about every offer</p>
            </div>
            <ul id="latest" className="nospace group">

                {loading ? <h1>Loading</h1> : responseData
                    .reverse()
                    .map(offer => <JobOffer key={offer._id} offer={offer} />)}


            </ul>

        </section>
    </div>
}