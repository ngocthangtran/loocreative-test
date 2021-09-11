import ButtonSeeMode from 'Components/Button/ButtonSeeMore';
import React from 'react';
import './bannerissue.css';

function BannerIssue(props) {
    return (
        <div
            style={{
                backgroundImage: "url('Asset/image/issueBackgroud.png')"
            }}
            className="banner__issue"
        >
            <div className="conten">
                <div className="title issue">
                    Happened’s issue
                </div>
                <div className="details">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </div>
                <div className="btn">
                    <ButtonSeeMode />
                </div>
            </div>
            <div className="whpn__issue">
                <div className="issue__item">
                    <div className="title">
                        Whpn <br />issue
                    </div>
                    <img src="Asset/Image/news-img-01.png" alt="" className="img_WHPN"/>
                </div>
                <div className="issue__item">
                    <div className="title">
                        c brand
                    </div>
                   
                    <div className="img"
                        style={{
                            backgroundImage:'url("Asset/Image/news-img-02.png")'
                        }}
                    >

                    </div>
                </div>
                <div className="issue__item">
                    <div className="title">
                        c brand
                    </div>
                   
                    <div className="img"
                        style={{
                            backgroundImage:'url("Asset/Image/news-img-03.png")'
                        }}
                    >

                    </div>
                </div>
                <div className="issue__item">
                    <div className="title active">
                        c brand
                    </div>
                   
                    <div className="img"
                        style={{
                            backgroundImage:'url("Asset/Image/news-img-04.png")'
                        }}
                    >

                    </div>
                </div><div className="issue__item">
                    <div className="title">
                        c brand
                    </div>
                   
                    <div className="img"
                        style={{
                            backgroundImage:'url("Asset/Image/news-img-05.png")'
                        }}
                    >

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerIssue;