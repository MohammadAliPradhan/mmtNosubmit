import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { user } from '../../constants';
import { Outlet } from 'react-router-dom';
const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const handleUser = () => {
        setShowLogout(!showLogout)
    }
    const handleLogOut = () => {
        if (window.confirm('Are you sure to LogOut?')) {
            localStorage.setItem('user', JSON.stringify({ ...user, islogged: false }))
            window.location.reload()
        }
    }
    return (
        <>
        <div className="NavParent">
        <nav className='navbar'>
            
            <div className="right">
                <ul id='unorderLisL'>
                    <li>
                        <NavLink to='/flights' className='list-item'>Flights</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hotels' className='list-item'>Hotels</NavLink>
                    </li>
                    <li>
                        <NavLink to='/trains' className='list-item'>Trains</NavLink>
                    </li>
                    {user?.islogged ?

                        <li>
                            <div className="user_info">
                                <button className='btn-user' onClick={handleUser}><PersonIcon />{user?.username.toUpperCase()}</button>
                                <button
                                    className={`btn-logout ${showLogout ? 'show_logout' : 'hide_logout'}`}
                                    type='button'
                                    onClick={handleLogOut}
                                >Logout</button>
                            </div>
                        </li>
                        :
                        <li>
                            <NavLink to='/login' className='list-item' >
                                <button className='btn-login' type='button'><PersonIcon />Login</button>
                            </NavLink>
                        </li>

                    }

                </ul>
            </div>
            <div className="right-menu">
                <div className="menu-icon">
                    <MenuIcon onClick={() => setMenuOpen(true)} />
                </div>
                <div className={`menu-lists ${menuOpen && 'active'}`}>
                    <div className="close-icon">
                        <CloseIcon onClick={() => setMenuOpen(false)} />

                    </div>
                    <ul>
                        {user?.islogged ?

                            <li>
                                <div className="user_info">
                                    <button className='btn-user' onClick={handleUser}><PersonIcon />{user?.username.toUpperCase()}</button>
                                    <button
                                        className={`btn-logout ${showLogout ? 'show_logout' : 'hide_logout'}`}
                                        type='button'
                                        onClick={handleLogOut}
                                    >Logout</button>
                                </div>
                            </li>
                            :
                            <li>
                                <NavLink to='/login' className='list-item' >
                                    <button className='btn-login' type='button' onClick={() => setMenuOpen(false)}><PersonIcon />Login</button>
                                </NavLink>
                            </li>

                        }

                        <li>
                            <NavLink to='/flights' className='list-item' onClick={() => setMenuOpen(false)}>Flights</NavLink>
                        </li>
                        <li>
                            <NavLink to='/hotels' className='list-item' onClick={() => setMenuOpen(false)}>Hotels</NavLink>
                        </li>
                        <li>
                            <NavLink to='/trains' className='list-item' onClick={() => setMenuOpen(false)}>Trains</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>

        <Outlet />

        </>
        
    )
    

}

export default Navbar