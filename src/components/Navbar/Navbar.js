import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'

export const Navbar = () => {
    const { user, profileData } = useContext(AuthContext)



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
                    {user ? <>
                        {user.accountType == "company" && <li>
                            <Link to="/create">Create offer</Link>
                        </li>}
                        <li>
                            <Link to={`/profile/${user._id}`}>My profile</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>

                    </>
                        : <><li>
                            <Link to="/register">Register</Link>
                        </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

                        </>}



                </ul>

            </nav>
            {profileData && <><p className='nav-profile'>Hello, {profileData?.name}!</p>
                <Link className='nav-profile-pic' to={`/profile/${user?._id}`}><img src={profileData?.imageUrl || "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="" /></Link>
            </>}
        </header>


    </div>
}