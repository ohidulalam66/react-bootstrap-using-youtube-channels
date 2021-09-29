import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className= "text-white footer-container">
                <div className= "about-section">
                <div>
                    <h2>About ME</h2>
                    <p>My name is Mohammad Ohidul Alam. I am a student of programming heroes. I am studying in CSE department. It's a top and popular programming YouTube channel's website, I think for those who want to learn programming can learn a lot as programming from these notable people channel. I respect them.</p>
                </div>
                <ul>
                    <a href="/face"><i class="fab fa-facebook"></i></a>
                    <a href="https://github.com/ohidulalam66" target= "_blank."><i class="fab fa-github"></i></a>
                    <a href="/instagram"><i class="fas fa-at"></i></a>
                </ul>
                </div>
                <img src="./profile.jpg"alt="" />
            </div>
        </>
    );
};

export default Footer;