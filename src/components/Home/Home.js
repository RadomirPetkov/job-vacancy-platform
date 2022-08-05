import { Heading } from "./Heading/Heading"
import { LatestJobOffers } from "./LatestJobOffers/LatestJobOffers"



export const Home = () => {


    return <>
        <Heading />
        <div className="wrapper row3">
            <main className="hoc container clear">
                <h3 className="test">Our latest offers:</h3>
                <hr className="btmspace-150" />
                <LatestJobOffers />


            </main>
        </div>
    </>

}