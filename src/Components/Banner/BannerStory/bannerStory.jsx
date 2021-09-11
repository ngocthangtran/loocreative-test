import ButtonSeeMode from 'Components/Button/ButtonSeeMore';
import React from 'react';
import './bannerstory.css';

function bannerStory(props) {
    return (
        <div
            className="banner__story"
            style={{
                backgroundImage: 'url("Asset/Image/bannerStory.png")'
            }}
        >
            <div className="conten">
                <div className="story__title">
                    Brand Story
                </div>
                <div className="story__details">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </div>
            </div>
            <div className="table">
                <div className="header">
                    <div className="line">

                    </div>
                    <div className="line">

                    </div>
                </div>
                <div className="container">
                    <div className="img">
                        <img src="Asset/Image/img.png" alt="" />
                    </div>
                    <div className="conten">
                        <div className="title">
                            What Happened’s Brand story
                        </div>
                        <div className="details">
                            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                        </div>
                        <div className="btn">
                            <ButtonSeeMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default bannerStory;