import React from 'react';
import './About.scss'
import Curtain from './Curtain';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <Curtain></Curtain>
                <p>
                    Hey, I'm Rahul, an engineer in Vancouver. <br/> <br/>

                    I build digital products for a living. Been at it about 10 years, these days as a
                    senior engineer at Coinbase and before that at Amazon. I've got a soft spot for good
                    design, and I'm in it for the moment an idea stops being an idea. <br/> <br/>

                    Most of my attention right now goes to AI and what it lets us build. <br/> <br/>

                    Reach out if you're working on something good. <br/>
                    <a className="about-link" href="mailto:this.agarwal@gmail.com">this.agarwal@gmail.com</a>

                </p>
            </section>
        )
    }
}