import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className= "bg-dark text-center mx-5 mt-2 p-3 rounded-3">
                <h2 className= "fw-bold header"><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a> Top Programming Related Youtube Channels</h2>
                <p className= "text-center text-white fs-6">Everyone can learn programming language from these youtube channels.Here I have given you some information about these channels.
                <br />
                These are the world's top programming youtube channel.</p>
            </div>
        </>
    );
};

export default Header;