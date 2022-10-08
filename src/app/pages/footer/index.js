import React from 'react';
import './index.scss';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();

    return (
        <div>
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__heading'>
                        <h5 onClick={() => history.push('/privacy-policy')}>Privacy Policy</h5>
                        <h5 className='footer__line'> |</h5>
                        <h5 onClick={() => history.push('/user-agreement')}> Terms and Conditions</h5>
                        <h5 className='footer__line'> |</h5>
                        <h5 onClick={() => history.push('/contact-us')}>Contact Us</h5>
                    </div>
                    <div className='footer__content'>
                        <h6>Registered Office Address: C-17, Basement, B-3, Guru Nanak
                            Pura, Laxmi Nagar, New Delhi 110092</h6>
                        <h6>Copyright © 2021 Chattybao Technologies Private Limited - All Rights Reserved.</h6>
                        <h6>CIN: U74999DL2021PTC388357</h6>
                        <h6>GSTIN: 07AAJCC8423B1ZW</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;