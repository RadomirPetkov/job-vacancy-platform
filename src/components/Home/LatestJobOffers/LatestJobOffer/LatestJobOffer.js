import { Link } from "react-router-dom"

export const LatestJobOffer = ({ offer }) => {

    return <li className="one_third">
        <figure>
            <Link className="imgover offerImg" to={`/details/${offer._id}`}>
                <img src={offer.imageUrl} alt="" />
            </Link>
            <figcaption>
                <h5 >Job position: <b>{offer.possition}</b></h5>
                <h5 >Job desription:</h5>
                <p>  {offer.summary.slice(0, 150)}{offer.summary.length>150 ? "..." : ""}</p>
                <p>Salary: {offer.salary}</p>
            </figcaption>
            <Link to={`/details/${offer._id}`} className="details-button">Details</Link>
        </figure>
    </li>
}