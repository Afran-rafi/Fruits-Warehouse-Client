import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from ''

const Menubar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-neviBlue fixed-top">
                <div className="container-fluid">
                    {/* <CustomLink className="navbar-brand" href="#"><img src="" alt="" /></CustomLink> */}
                    <div className='margin-'>
                        <img src={logo} alt="" /><span className='lion'>GYM</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/service'>Service</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/about'>About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/addUser'>Add User</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/updateUser'>Update User</CustomLink>
                            </li>
                            <li className="nav-item left">
                                <CustomLink className='uNone login-btn rounded' to='/login'><span className='text-shadow'>Login</span></CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;