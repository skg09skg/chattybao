import React from 'react';
import './index.scss';
import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';
import slide4 from '../../../assets/images/slide4.png';
import slide5 from '../../../assets/images/slide5.png';
import slide6 from '../../../assets/images/slide6.png';
import slide7 from '../../../assets/images/slide7.png';
import $ from 'jquery';


const Parallax = () => {

    $(function () {
        $(window).scroll(function () {

            if ($(window).scrollTop() < $('#div01').height()) {
                $('#slide1').show();//true
                $('.logo:not(#slide1)').hide();

            } else if ($(window).scrollTop() < $('#div01').height() * 2) {
                $('#slide2').show();//true
                $('.logo:not(#slide2)').hide();

            } else if ($(window).scrollTop() < $('#div01').height() * 3) {
                $('#slide3').show();//true
                $('.logo:not(#slide3)').hide();

            } else if ($(window).scrollTop() < $('#div01').height() * 4) {
                $('#slide4').show();//true
                $('.logo:not(#slide4)').hide();

            } else if ($(window).scrollTop() < $('#div01').height() * 5) {
                $('#slide5').show();//true
                $('.logo:not(#slide5)').hide();

            } else {
                $('#slide6').show();//true
                $('.logo:not(#slide6)').hide();
            }
        });
    });



    return (
        <div>
            <div className='scroll-anim'>
                <div className='scroll-anim__content'>
                    <div id='div01' className='section'>
                        <h2>Create &amp; Share</h2>
                        <h1>Visiting Cards</h1>
                    </div>
                    <div id='div02' className='section'>
                        <h2>Make Customers</h2>
                        <h1>scan your QR Code</h1>
                    </div>
                    <div id='div03' className='section'>
                        <h2>Create &amp; Share</h2>
                        <h1>your Price List</h1>
                    </div>
                    <div id='div04' className='section'>
                        <h2>Manage Orders</h2>
                        <h1>From WhatsApp</h1>
                    </div>
                    <div id='div05' className='section'>
                        <h2>One Click</h2>
                        <h1>Payment Collection</h1>
                    </div>
                    <div id='div06' className='section'>
                        <h2>ChattyBao</h2>
                        <h1>Home Delivery</h1>
                        <h1>Service</h1>
                    </div>
                </div>
                <div id='allLogos' className='scroll-anim__images'>
                    <div id='slide1' className='logo'>
                        <img src={slide1} alt='' />
                    </div>

                    <div id='slide2' className='logo'>
                        <img src={slide2} alt='' />
                    </div>

                    <div id='slide3' className='logo'>
                        <img src={slide3} alt='' />
                    </div>

                    <div id='slide4' className='logo'>
                        <img src={slide4} alt='' />
                    </div>

                    <div id='slide5' className='logo'>
                        <img src={slide5} alt='' />
                    </div>

                    <div id='slide6' className='logo'>
                        <img src={slide6} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax;