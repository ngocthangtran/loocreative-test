import React from 'react';
import "./banner.css"
function Banner(props) {
    return (
        <div className="banner_parent">
            <img
                src="Asset/Image/main-banner.png"
                className='banner'
                style={{ width: "100%", display: 'block' }}
                alt=""
            />
            <div className="what__happened"
                style={{
                    backgroundImage: 'url("Asset/Image/introduction-bg.png")'
                }}
            >
                <div className="title">
                    What happened
                </div>
                <div className="details">
                    How to create mobile-optimized videos in minutes. Not a designer, <br />
                    every team makes a lot of videos Can be trimmed. Take the first <br />
                    step to your brand's success. How to create <br />
                    mobile-optimized videos in minutes. <br />
                </div>
            </div>
            <div className="best__product">
                <img
                    src="Asset/Image/bes-bg.png"
                    className='banner'
                    style={{ width: "100%", display: 'block' }}
                    alt=""
                />
                <div>
                    <div className="container">
                        <div className="title">
                            best product
                        </div>
                        <div className="details">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                        </div>
                    </div>
                    <div className="list__product__best">
                        <div
                            className="item">
                            <img
                                src="Asset/Image/best-image-01.png"
                                alt=""
                                style={{ width: "100%", display: 'block' }}
                            />
                            <div
                                className="circle__tag"
                                style={
                                    {
                                        backgroundImage: 'url("/Asset/Icon/producticon-01.png")'
                                    }
                                }
                            />
                            <div className="box__tag">
                                <div className="text">
                                    How to create<br />
                                    mobile-optimized
                                </div>
                                <div className="button">
                                    GO
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="Asset/Image/best-image-02.png"
                                alt=""
                                style={{ width: "100%", display: 'block' }}
                            />
                            <div
                                className="circle__tag"
                                style={
                                    {
                                        backgroundImage: 'url("/Asset/Icon/producticon-02.png")'
                                    }
                                }
                            />
                            <div className="box__tag">
                                <div className="text">
                                    How to create
                                    mobile-optimized
                                </div>
                                <div className="button">
                                    GO
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <img
                                src="Asset/Image/best-image-03.png"
                                alt=""
                                style={{ width: "100%", display: 'block' }}
                            />
                            <div
                                className="circle__tag"
                                style={
                                    {
                                        backgroundImage: 'url("/Asset/Icon/producticon-03.png")'
                                    }
                                }
                            />
                            <div className="box__tag">
                                <div className="text">
                                    How to create
                                    mobile-optimized
                                </div>
                                <div className="button">
                                    GO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;