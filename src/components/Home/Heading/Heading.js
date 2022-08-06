import {Link} from "react-router-dom"

export const Heading = () => {


    return <div
        className="bgded overlay"
        style={{ backgroundImage: 'url("images/demo/backgrounds/01.jpg")' }}
    >

        <div id="pageintro" className="hoc clear">

            <article>
                <h3 className="heading">Job searching platform</h3>
                <p>
                    Whether you are looking for a new job or a new employee, you are on the right place!
                </p>
                <footer>
                    <ul className="nospace inline pushright">
                        <li>
                            <Link  className="btn" to="/catalog">
                                Find your job!
                            </Link>
                        </li>
                        <li>
                            <Link className="btn" to="#">
                                Publish your job vacancy!
                            </Link>
                        </li>
                    </ul>
                </footer>
            </article>

        </div>

    </div>
}