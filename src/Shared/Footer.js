import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" container-fluid ">
            <footer className=" py-3  justify-content-center" style={{
                backgroundColor: "rgba(128, 128, 128, 0.945)",


            }}>
                <div className='d-flex justify-content-center'>
                    <Link className="text-white text-decoration-none" to="/contact"><h6>Contact Us</h6></Link>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link className="text-white text-decoration-none" to="/register"><h6>Register</h6></Link>
                </div>

                <br />

                <small className="text-white d-flex justify-content-center"> &#169; 2022  Tour On Bangladesh</small>
            </footer>
        </div>
    );
};

export default Footer;