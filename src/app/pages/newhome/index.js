/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.scss';
import img1 from '../../../assets/images/Banner1.png';
import img2 from '../../../assets/images/step1.png';
import img3 from '../../../assets/images/step2.png';
import img4 from '../../../assets/images/step3.png';
import img5 from '../../../assets/images/features1.png';
import img7 from '../../../assets/images/play-store.png';
import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';
import slide4 from '../../../assets/images/slide4.png';
import slide5 from '../../../assets/images/slide5.png';
import slide6 from '../../../assets/images/slide6.png';
import slide7 from '../../../assets/images/slide7.png';
import blue from '../../../assets/images/bluebg.jpg';
import orange from '../../../assets/images/orangebg.jpg';
// import Fade from 'react-reveal/ScrollAnimation';
import ReactTooltip from 'react-tooltip';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import $ from 'jquery';
import Parallax from '../parallax';
import { useHistory } from 'react-router';


const NewHome = () => {
    let history = useHistory();

    // const handleClick = () => {
    //     href='https://play.google.com/store/apps/details?id=com.goping.merchant';
    // }

    return (
        <div>
            <div className='cont' style={{
                backgroundImage: `url(${blue})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert'
            }}>
                <div className='colm'>
                    <div className='row-cont'>
                        <div className='row-1'>
                            <div className='row-1__container'>
                                <div className='row-1__content'>
                                    <div className='row-1__content1'>
                                        <div className='experience'>
                                            <h2 style={{ color: '#424143' }}>Now experience</h2>
                                            <p>,</p>
                                        </div>
                                        <h3 style={{ color: '#2ca74a' }}>WhatsApp Shopping</h3>
                                        <p style={{ color: '#424143' }}>From your local shops &amp; service providers</p>
                                    </div>
                                </div>
                                <div className='row-1__image'>
                                    <img src={img1} alt='img1' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-hr'>
                        <div className='hr'>
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className='row-2__main'>
                            <div className='row-2__content'>
                                <div className='row-2__header'>
                                    <h1>No App.</h1>
                                    <h1>Just WhatsApp</h1>
                                </div>
                                <div className='popup' >
                                    <div className='popup-1'>
                                        <div className='hr-line'>
                                            <h6>o</h6>
                                        </div>
                                        <h6 data-tip data-for='100% privacy'
                                            data-background-color='white'
                                            data-text-color='#424143'> 100 % Privacy</h6>

                                        <ReactTooltip id='100% privacy'>
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Your number is hidden from merchant every time you chat or call to order</p>
                                                </div>
                                            </div>
                                        </ReactTooltip>
                                    </div>
                                    <h6 className='line'>|</h6>
                                    <div className='popup-2'>
                                        <div className='hr-line'>
                                            <h6>o</h6>
                                        </div>
                                        <h6 data-tip data-for='1 Click Payment'
                                            data-background-color='white'
                                            data-text-color='#424143'> 1 Click Payment</h6>

                                        <ReactTooltip id='1 Click Payment'
                                            data-background-color='white'
                                            style={{ backgroundColor: '#fff' }}>
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Pre filled amount and beneficiary - just enter your UPI PIN</p>
                                                </div>
                                            </div>
                                            <hr className='popup__line' />
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Use any UPI app from within WhatsApp</p>
                                                </div>
                                            </div>
                                            <hr className='popup__line' />
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Payment confirmation within WhatsApp</p>
                                                </div>
                                            </div>
                                        </ReactTooltip>
                                    </div>
                                    <h6 className='line'>|</h6>
                                    <div className='popup-2'>
                                        <div className='hr-line'>
                                            <h6>o</h6>
                                        </div>
                                        <h6 data-tip data-for='30 min delivery'
                                            data-background-color='white'
                                            data-text-color='#424143'> 30 min delivery</h6>

                                        <ReactTooltip id='30 min delivery'>
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Reliable 30 min delivery service</p>
                                                </div>
                                                <hr className='popup__line' />
                                            </div>
                                            <div className='popup__list'>
                                                <div className='popup__list-li'>
                                                    <p>Delivery tracking in WhatsApp</p>
                                                </div>
                                            </div>
                                        </ReactTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-3'>
                    <div id='how-it-works' className='row-3__main'>
                        <div className='row-3__header'>
                            {/*<div className='hr1'>
                        </div>*/}
                            <h2>How it <span>works </span> <span style={{ borderBottom: '500px' }}>?</span></h2>
                            <div className='hr1'>
                            </div>
                        </div>
                        <div className='row-3-1' style={{ paddingTop: '40px' }}>
                            <div className='row-3-2'>
                                <div className='row-3__steps'>
                                    <div className='step1'>
                                        <div className='step1__image'>
                                            <img src={img2} alt='img1' />
                                        </div>
                                        <div className='step1__content-main'>
                                            <div className='step1__content'>
                                                <ScrollAnimation animateIn='fadeIn'
                                                    animateOut='fadeOut' delay={300}>
                                                    <h4>Scan merchant's</h4>
                                                    <h4>ChattyBao QR Code</h4>
                                                </ScrollAnimation>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='step2'>
                                <div className='step2__image'>
                                    <img src={img3} alt='img1' />
                                </div>
                                <div className='step2__content-main'>
                                    <div className='step2__content'>
                                        <ScrollAnimation animateIn='fadeIn'
                                            animateOut='fadeOut' delay={300}>
                                            <h5>Receive merchant visiting card</h5>
                                            <h5>Click link to start chat</h5>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='step3'>
                            <div className='step3__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={400}>
                                    <img src={img4} alt='img1' />
                                </ScrollAnimation>
                            </div>
                            <div className='step3__content-main'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={400}>
                                    <div className='fa-icon'>
                                        <i className='fa fa-whatsapp' />
                                        <h4>All on WhatsApp</h4>
                                    </div>
                                    <div className='hr2'></div>
                                    <div className='dot'>&bull;</div>
                                    <div className='step3__content'>
                                        <p>Chat</p>
                                        <p>Order</p>
                                        <p>Make payment</p>
                                        <p>Track delivery</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container1' style={{
                backgroundImage: `url(${orange})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert',
            }} id='have-a-business'>
                <div className='con-2'>
                    <div className='con-2__content'>
                        <ScrollAnimation animateIn='fadeIn'
                            animateOut='fadeOut' delay={300}>
                            <h1 >Have a Business ?</h1>
                            <h2>5 minute Sign up</h2>
                        </ScrollAnimation>
                        <div className='con-2__link'>
                            <a href='https://play.google.com/store/apps/details?id=com.goping.merchant' target='_blank'><img src={img7} alt='' /></a>
                            <div className='con-2__link-content'>
                                <a href='https://play.google.com/store/apps/details?id=com.goping.merchant' target='_blank'> <p>Download Now </p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col' style={{
                backgroundImage: `url(${blue})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'revert'
            }}>
                <div className='container2'>
                    <div className='con-3'>
                        <div className='con-3__container'>
                            <div className='con-3__content'>
                                <div className='con-3__content-main'>
                                    <ScrollAnimation animateIn='fadeIn'
                                        animateOut='fadeOut' delay={300}>
                                        <h2>Features of </h2>
                                        <h2>ChattyBao Partner App</h2>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className='hr3'></div>
                            <div className='con-3__image'>
                                <img src={img5} alt='img1' />
                            </div>
                        </div>
                    </div>
                </div>

                <div id='fixadent' className='con-4 scrollanim'>

                    {/**/} <div style={{ marginBottom: '40px' }} >
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide1} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>Create &amp; Share</h2>
                                    <h1 >Visiting Cards</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide2} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>Make Customers</h2>
                                    <h1 >scan your QR Code</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide3} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>Create &amp; Share</h2>
                                    <h1 >your Price List</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide4} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>Manage Orders</h2>
                                    <h1 >From WhatsApp</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide5} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>One Click</h2>
                                    <h1 >Payment Collection</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide6} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>ChattyBao</h2>
                                    <h1 >Home Delivery</h1>
                                    <h1>Service</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className='con-4__container'>
                            <div className='con-4__image'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={500}>
                                    <img src={slide7} alt='' />
                                </ScrollAnimation>
                            </div>
                            <div className='con-4__content'>
                                <ScrollAnimation animateIn='fadeIn'
                                    animateOut='fadeOut' delay={600}>
                                    <h2>View &amp; Reconcile</h2>
                                    <h1 >Your Payments</h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewHome;