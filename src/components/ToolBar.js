import React from "react";
import "../styles/ToolBar.css";

const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
};

const MoveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth"});
};

const handleLoginRedirect = () => {
    const redirectUrl = 'https://tangerine-likelion.netlify.app/';
    const oauthUrl = `http://tangerine-dev-env.eba-3muqjbjx.ap-northeast-2.elasticbeanstalk.com/`
    window.location.href=oauthUrl;
}

const ToolBar = () => {
    return (
        <div className = "toolbar-container">
            <img
                src = {`${process.env.PUBLIC_URL}/icon/icon_login.svg`}
                alt = "login"
                className = "toolbar_icon">
            </img>
            <img
                src = {`${process.env.PUBLIC_URL}/icon/icon_recent.svg`}
                alt = "recent"
                className = "toolbar_icon">
            </img>
            <img
                src = {`${process.env.PUBLIC_URL}/icon/icon_up.svg`}
                alt = "up"
                className = "toolbar_icon"
                onClick = {MoveToTop}>
            </img>
            <img
                src = {`${process.env.PUBLIC_URL}/icon/icon_down.svg`}
                alt = "down"
                className = "toolbar_icon"
                onClick = {MoveToBottom}>
            </img>
        </div>
    );
};

export default ToolBar;