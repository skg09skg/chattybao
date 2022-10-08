/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-undef */
import React from 'react';
import './index.scss';
import blue from '../../../assets/images/bluebg.jpg';
import logo from '../../../assets/images/logo-logo.png';
import { HashLink } from 'react-router-hash-link';
import { useHistory } from 'react-router';


const Header = () => {
    const history = useHistory();

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };
    

    return (
        <div>
            <div className='header' style={{
                backgroundImage: `url(${blue})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                width: '100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert',
            }}>

                <header className='header-main header-light fixed-top'>
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <div className='container'>
                            <div className='header__image'>
                                <img onClick={() => history.push('/')} src={logo} alt='' />
                            </div>

                            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'>
                                    <i className='fa fa-bars '></i>
                                    <i className='fa fa-close'></i>
                                </span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <div className='navbar-dropdown'>
                                    <div className='navbar-hide'>
                                        <ul className='navbar-nav ml-auto'>
                                            <li className='nav-item'>
                                                <HashLink smooth to='#how-it-works' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                                    How it Works
                                                </HashLink>

                                            </li>

                                            <li className='nav-item'>
                                                <HashLink smooth to='#have-a-business' onClick={handleClickScroll} style={{ cursor: 'pointer' }} className='nav-link'>
                                                    Have a Business ?
                                                </HashLink>
                                            </li>

                                            <li className='nav-item'>
                                                <a onClick={() => history.push('/contact-us')} style={{ cursor: 'pointer' }} className='nav-link'>
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header