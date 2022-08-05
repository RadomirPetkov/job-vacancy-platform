import {Link} from 'react-router-dom'

export const JobOffer = ({ offer }) => {

    return <li className="one_third">
        <article>
            <a className="imgover offerImg" href="#">
                <img src={offer.imageUrl} alt="" />
            </a>
            <ul className="nospace meta group">
                <li>
                    <i className="fas fa-user" /> <a href="#">{offer.ownerName}</a>
                </li>
                <li>
                    <i className="far fa-clock" />
                    <time dateTime="2045-04-06T08:15+00:00">{offer._createdOn}</time>
                </li>
            </ul>
            <div className="excerpt">
                <h6 className="heading">
                    Job position: <b>{offer.possition}</b>
                </h6>
                <h5 >Job desription:</h5>
                <p>  {offer.summary}</p>
                <p>Salary: {offer.salary}</p>
                <footer>
                    <Link to={`/details/${offer._id}`} className="btn" >
                        Read More
                    </Link>
                </footer>
            </div>
        </article>
    </li>

}