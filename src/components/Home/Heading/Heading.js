import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/authContext"

export const Heading = () => {
    const { user } = useContext(AuthContext)



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

                        {user?.accountType == "jobseeker"
                            ?
                            <li>
                                <Link className="btn" to="/catalog">
                                    Find your job!
                                </Link>
                            </li>
                            :
                            user?.accountType == "company"
                                ?
                                <li>
                                    <Link className="btn" to="/create">
                                        Publish your job vacancy!
                                    </Link>
                                </li>
                                :
                                ""
                        }

                    </ul>
                </footer>
            </article>

        </div>

    </div>
}