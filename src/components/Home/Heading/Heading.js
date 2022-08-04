

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
                            <a className="btn" href="#">
                                Find your job!
                            </a>
                        </li>
                        <li>
                            <a className="btn" href="#">
                                Publish your job vacancy!
                            </a>
                        </li>
                    </ul>
                </footer>
            </article>

        </div>

    </div>
}