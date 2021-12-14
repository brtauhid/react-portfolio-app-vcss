import React from 'react';
import aboutImg from '../../img/about-img.jpg'
import './About.css';

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card">
                    <img className="a-img" src={aboutImg} alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>

                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ullam cumque nemo repudiandae mollitia totam?</p>

                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis enim consequatur dolore odio commodi fugit dolores, accusantium laudantium expedita modi minima laboriosam, animi nostrum ipsa earum deserunt porro repudiandae nobis, nisi ducimus eligendi distinctio atque. Earum quae blanditiis placeat!</p>
            </div>
        </div>
    );
};

export default About;