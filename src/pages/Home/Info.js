import React from "react";

const Info = () => {
    return(
        <div className="info-container">
            <div className="aboutus-left">
                <img
                    src = {`${process.env.PUBLIC_URL}/img/about_us.png`}
                    className = "aboutus-img">
                </img>
                <div className="aboutus">
                    ABOUT US
                </div>
            </div>
            <div className="aboutus-right">
                <div className="aboutus-title">
                    감각을 깨우는 향기의 순간,<br />
                    당신만을 위한 특별한 향
                </div>  
                <div className="aboutus-text">
                    향기는 기억을 남기고, 공간을 채우며, 감성을 자극합니다.<br />
                    <br />
                    우리는 섬세한 조향 기술로 당신만을 위한 특별한 향을 만듭니다.<br />
                    고급스러운 향수부터 공간을 채우는 디퓨저까지,<br />
                    하루의 시작과 끝을 향기로 완성하세요.<br />
                    <br />
                    지금, 당신만의 시그니처 향을 찾아보세요.
                </div>
            </div>
        </div>
    );
};

export default Info;