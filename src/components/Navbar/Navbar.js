import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'

export const Navbar = () => {
    const { user } = useContext(AuthContext)
    
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
            {user && <><p className='nav-profile'>Hello, {user?.name}!</p>
                <Link className='nav-profile-pic' to={`/profile/${user._id}`}><img src='https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png' alt="" /></Link>
            </>}
        </header>


    </div>
}