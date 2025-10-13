// Footer.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Footer.css';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const footerClass = theme === 'light' ? 'light' : '';

    return (
        <footer className={footerClass}>
            <div className="container">
                <div className="structure">
                    <div className="footer_raw">
                        <h6>Contact information</h6>
                        <ul>
                            <li><p>Address : #135 block,London 10036,UK</p></li>
                            <li><p>9879069667</p></li>
                            <li><p>example@mail.com</p></li>
                            <div className="social_media">
                                <span className="fa fa-facebook" aria-hidden="true"></span>
                                <span className="fa fa-twitter" aria-hidden="true"></span>
                                <span className="fa fa-dribbble" aria-hidden="true"></span>
                                <span className="fa fa-google" aria-hidden="true"></span>
                            </div>
                        </ul>
                    </div>
                    <div className="footer-nav-col">
                        <h6>Company</h6>
                        <ul>
                            <li><p>About us</p></li>
                            <li><p>Blog posts</p></li>
                            <li><p>Services</p></li>
                            <li><p>Packages</p></li>
                        </ul>
                    </div>
                    <div className="footer-nav-col">
                        <h6>Quick links</h6>
                        <ul>
                            <li><p>Contact us</p></li>
                            <li><p>Create account</p></li>
                            <li><p>Our branches</p></li>
                            <li><p>Site feedback</p></li>
                        </ul>
                    </div>
                    <div className="footer-nav-col">
                        <h6>Support</h6>
                        <ul>
                            <li><p>Destination</p></li>
                            <li><p>Our guides</p></li>
                            <li><p>Support</p></li>
                            <li><p>Help</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright_line">
                <div className="container">
                    <p> ©️ <span id="year">2020</span> Trace. All Rights Reserved. Design by 
                        <a href="https://w3layouts.com/" target="_blank">
                            W3layouts</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;