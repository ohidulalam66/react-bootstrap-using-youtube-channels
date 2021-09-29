import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className= "text-white footer-container">
                <div className= "about-section">
                <div>
                    <h2 className= "fw-bold">About ME</h2>
                    <hr/>
                    <p className= "fs-4">My name is <b className= "text-danger fs-5">Mohammad Ohidul Alam</b>. I am a student of programming heroes. I am studying in CSE department. It's a top and popular programming YouTube channel's website, I think for those who want to learn programming can learn a lot as programming from these notable people channel.I respect them.</p>
                </div>
                <ul>
                    <a href="/face"><i class="fab fa-facebook"></i></a>
                    <a href="https://github.com/ohidulalam66" target= "_blank."><i class="fab fa-github"></i></a>
                    <a href="https://mdnoyonctg15@gmail.com"><i class="fas fa-at"></i></a>
                </ul>
                </div>
                <img src="./profile-pic.png"alt="" />
            </div>
        </>
    );
};

export default Footer;