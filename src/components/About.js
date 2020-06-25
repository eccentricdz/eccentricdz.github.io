import React from 'react';
import './About.scss'
import Curtain from './Curtain';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <Curtain></Curtain>   
                <p>
                Hello! <br /> <br />

                I am a designer / developer hybrid and enjoy crafting functional and aesthetic digital solutions, by means of design and code.<br /> <br />

                I have been obsessed with everything design for as long as I can remember and have freelanced for brands around the world designing identities, products and experiences.<br /> <br />

                After graduating with a bachelor’s degree in Computer Science, I joined Amazon, where I am focusing on design systems and tooling for front-end development.<br /> <br />

                Hit me up, if you’d like to work on a project with me or just say hello,<br />
                <a className="about-link" href="mailto:this.agarwal@gmail.com">this.agarwal@gmail.com</a>
                </p>
            </section>
        )
    }
}