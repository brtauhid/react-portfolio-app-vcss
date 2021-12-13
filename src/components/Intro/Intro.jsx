import React from 'react';
import "./intro.css";
import tauhidImg from '../../img/tauhid.png';
import scrollDown from '../../img/scroll.png';

const intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">BR Tauhid</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                    <div className="i-scroll">
                        <img src={scrollDown} alt="" />
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={tauhidImg} className="i-img" alt="" />
            </div>
        </div>
    );
};

export default intro;