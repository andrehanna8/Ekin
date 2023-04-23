import React from 'react';
import './BottomBanner.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


export default function BottomBanner() {
    return (
        <>
        <div className="bottom-banner">
            
                <div className='bb-left'>
                    <div className='col-1'>
                        <a href="https://www.nike.com/gift-cards" target="_blank" rel="noreferrer"><h1>GIFT CARDS</h1></a>
                        <a href="https://www.nike.com/promotions" target="_blank" rel="noreferrer"><h1>PROMOTIONS</h1></a>
                        <a href="https://www.nike.com/retail" target="_blank" rel="noreferrer"><h1>FIND A STORE</h1></a>
                        <a href="https://www.nike.com/register" target="_blank" rel="noreferrer"><h1>SIGN UP FOR EMAIL</h1></a>
                        <a href="https://www.nike.com/membership" target="_blank" rel="noreferrer"><h1>BECOME A MEMBER</h1></a>
                        <a href="https://www.nike.com/journal" target="_blank" rel="noreferrer"><h1>NIKE JOURNAL</h1></a>
                        <a href="https://www.nike.com/help" target="_blank" rel="noreferrer"><h1>SEND US FEEDBACK</h1></a>
                    </div>

                    <div className='col-2'>
                        <a href="https://www.nike.com/help" target="_blank" rel="noreferrer"><h1>GET HELP</h1></a>
                        <a href="https://www.nike.com/orders" target="_blank" rel="noreferrer"><h2>Order Status</h2></a>
                        <a href="https://www.nike.com/help/a/shipping-info" target="_blank" rel="noreferrer"><h2>Shipping</h2></a>
                        <a href="https://www.nike.com/help/a/returns-policy" target="_blank" rel="noreferrer"><h2>Returns</h2></a>
                        <a href="https://www.nike.com/help/a/order-cancellation" target="_blank" rel="noreferrer"><h2>Cancels</h2></a>
                        <a href="https://www.nike.com/help/a/payment-options" target="_blank" rel="noreferrer"><h2>Payments</h2></a>
                        <a href="https://www.nike.com/gift-cards/balance" target="_blank" rel="noreferrer"><h2>Balance</h2></a>
                        <a href="https://www.nike.com/help" target="_blank" rel="noreferrer"><h2>Contact Us</h2></a>
                    </div>

                    <div className='col-3'>
                        <a href="https://www.nike.com/about" target="_blank" rel="noreferrer"><h1>ABOUT NIKE</h1></a>
                        <a href="https://news.nike.com/" target="_blank" rel="noreferrer"><h2>News</h2></a>
                        <a href="https://jobs.nike.com/" target="_blank" rel="noreferrer"><h2>Careers</h2></a>
                        <a href="https://investors.nike.com/" target="_blank" rel="noreferrer"><h2>Investors</h2></a>
                        <a href="https://purpose.nike.com/" target="_blank" rel="noreferrer"><h2>Purpose</h2></a>
                        <a href="https://purpose.nike.com/sustainability" target="_blank" rel="noreferrer"><h2>Sustainability</h2></a>
                    </div>
                </div>

                <div className='bb-right'>
                <div className='bb-right-top'>
                <a id="github" className="icon-link" target="_blank" href="https://github.com/andrehanna8" rel="noreferrer">
    <FaGithub />
</a>
<a id="linkedin" className="icon-link" target="_blank" href="https://www.linkedin.com/in/andre-hanna/" rel="noreferrer">
    <FaLinkedin />
</a>

                </div>
            </div>
        </div>

        </>
    )
}
