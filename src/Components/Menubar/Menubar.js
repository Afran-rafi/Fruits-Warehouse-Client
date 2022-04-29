import React from 'react';
import './Menubar.css'
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Images/Grocery-Logo.jpg'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Menubar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg fixed-top shadow">
                <div className="container-fluid">
                    <div className='navbar-margin d-flex justify-content-center align-items-center'>
                        <img src={logo} alt="" />
                        <p className='fw-bold font-size'>Were<span className='text-success'>House</span></p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/inventory'>Inventory</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/about'>Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/addUser'>Add User</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/updateUser'>Update User</CustomLink>
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item ms-auto left">
                                {user ?
                                    <button onClick={logout} className='login-btn fw-bold'>Sign Out</button>
                                    :
                                    <CustomLink className='uNone login-btn rounded' to='/login'><span className='text-shadow'>Login</span></CustomLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;