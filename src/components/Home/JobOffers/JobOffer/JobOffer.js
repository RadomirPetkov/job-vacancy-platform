

export const JobOffer = ({ offer }) => {

    console.log(offer);
    console.log(`123`);

    return <li className="one_third">
        <figure>
            <a className="imgover offerImg" href="#">
                <img src={offer.imageUrl} alt="" />
            </a>
            <figcaption>
                <h5 >Job position: <b>{offer.possition}</b></h5>
                <h5 >Job desription:</h5>
                <p>  {offer.summary}</p>
                <p>Salary: {offer.salary}</p>
            </figcaption>
            <button className="details-button">Details</button>
        </figure>
    </li>
}