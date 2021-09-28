import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import YoutubeChannel from '../YoutubeChannel/YoutubeChannel';
import './YoutubeChannels.css'

const YoutubeChannels = () => {

    const [youtubeChannels, setYoutubeChannels] = useState([]);

    const url = './channels.JSON';

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setYoutubeChannels(data))
    }, [])
    return (
        <>
            <Row xs={1} md={4} className="m-2 g-4">
                {
                    youtubeChannels.map(youtubeChannel => 
                    <YoutubeChannel
                    key = {youtubeChannel.id}
                    youtubeChannel= {youtubeChannel}
                    />)
                }
            </Row>
        </>
    );
};

export default YoutubeChannels;