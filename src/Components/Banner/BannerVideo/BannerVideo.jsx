import ButtonSeeMode from 'Components/Button/ButtonSeeMore';
import React from 'react';
import './bannervideo.css'
function BannerVideo(props) {
    return (
        <div
            className='banner__video'
            style={
                {
                    backgroundImage: 'url("Asset/image/backgroudVideo.png")'
                }
            }
        >
            <div className="conten">
                <div className="video__title">
                    what happened
                </div>
                <div className="video__details">
                    How to create mobile-optimized videos in minutes. Not a designer,<br />
                    every team makes a lot of videos Can be trimmed. Take the first
                </div>
                <div className="btn">
                    <ButtonSeeMode />
                </div>
                <img src="Asset/Image/video.png" alt="" />
            </div>
        </div>
    );
}

export default BannerVideo;