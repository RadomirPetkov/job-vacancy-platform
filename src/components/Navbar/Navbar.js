import { Link } from 'react-router-dom'

export const Navbar = () => {


    return <div className="wrapper row1">
        <header id="header" className="hoc clear">
            <div id="logo" className="fl_left">

                <h1>
                    <Link to="/">Home</Link>
                </h1>

            </div>
            <nav id="mainav" className="fl_right">

                <ul className="clear">
                    <li className="active">
                        <Link to="/catalog">Catalog</Link>
                    </li>

                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Create offer</Link>
                    </li>
                </ul>

            </nav>
        </header>
    </div>
}