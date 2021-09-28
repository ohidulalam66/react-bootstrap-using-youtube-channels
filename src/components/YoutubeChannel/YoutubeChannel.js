import React from 'react';
import './YoutubeChannel.css'
import { Card, Col } from 'react-bootstrap';

const YoutubeChannel = props => {

    const {img, name, url, subscribers, joined, views} = props.youtubeChannel;
    return (
        <>
            <Col>
                <Card className= "h-100 p-3 card">
                    <Card.Img variant="top" className= "img" src={img}/>
                    <Card.Body className= "fw-bold">
                    <h4 className= "text-center">{name}</h4>
                    <hr />
                    <p><i className="fas fa-user-plus info-icon"></i> Subscribers: {subscribers}</p>
                    <p><i className="far fa-calendar-alt info-icon"></i> Joined: {joined}</p>
                    <p><i className="fas fa-eye info-icon"></i> Views: {views}</p>
                    </Card.Body>
                    <div className= "media-icon">
                    <a href="/github" target= "_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="/github" target= "_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="/github" target= "_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div id="outer">
                    <a className= "anchor" href= {url} target= "_blank" rel="noreferrer"><div className="button_slide slide_left">Go to Channel</div></a>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default YoutubeChannel;