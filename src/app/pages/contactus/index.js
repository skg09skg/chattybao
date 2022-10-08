import React from 'react';
import './index.scss';
import blue from '../../../assets/images/bluebg.jpg';
import orange from '../../../assets/images/orangebg.jpg';

import img7 from '../../../assets/images/play-store.png';

const ContactUs = () => {
    return (
        <div>
            <div className='con' style={{
                backgroundImage: `url(${blue})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert'
            }}>
                <div className='row-container'>
                    <div className='contactus'>
                        <div className='contactus__container'>
                            <div className='contactus__header'>
                                <h3>  Contact Us</h3>
                            </div>
                            <div className='contactus__content'>
                                <div className='content__section1'>
                                    <div className='content__mail'>
                                        <h5 style={{ color: '#424143' }}>Email:</h5>
                                        <h5 style={{ color: '#424143' }}> help@chattybao.com</h5>
                                    </div>
                                    <div className='content__number'>
                                        <h5 style={{ color: '#424143' }}>Contact:</h5>
                                        <h5 style={{ color: '#424143' }}> 73532 56777</h5>
                                    </div>
                                </div>
                                {/* <div className='content__section2'>

                                    <i className='fa fa-whatsapp'></i>
                                    <h3>WhatsApp Us</h3>

                                </div>*/}
                                <div className='content__section3'>
                                    <h6 style={{ color: '#424143' }}>Registered Office Address:</h6>
                                    <h6 style={{ color: '#424143' }}>   C-17, Basement, B-3, Guru Nanak Pura,</h6>
                                    <h6 style={{ color: '#424143' }}>  Laxmi Nagar, New Delhi 110092</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container1' style={{
                backgroundImage: `url(${orange})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert'
            }}>
                <div className='con-2'>
                    <div className='con-2__content'>
                        <h1 >Have a Business ?</h1>
                        <h2>5 minute Sign up</h2>
                        <div className='con-2__link'>
                            <a href='https://play.google.com/store/apps/details?id=com.goping.merchant' target='_blank'><img src={img7} alt='' /></a>
                            <div className='con-2__link-content'>
                            <a href='https://play.google.com/store/apps/details?id=com.goping.merchant' target='_blank'><p>Download Now</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;