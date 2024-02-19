import React from 'react';
import './About.scss'
import Curtain from './Curtain';

export default class About extends React.Component {
    render() {
        return (
            <section className="about">
                <Curtain></Curtain>
                <p>
                    Hello! <br/> <br/>

                    I'm a Vancouver-based Software Engineer with a passion for crafting visually stunning
                    and functionally rich user experiences. Equipped with a Bachelor's degree in Computer Science and
                    experience at both Amazon and Cloud Kitchens, I seamlessly blend
                    aesthetics with technical expertise. <br/> <br/>

                    Whether it's building intuitive interfaces, innovating with cutting-edge tech, or bridging the gap
                    between creativity and code, I thrive in dynamic environments. My insatiable curiosity fuels my
                    drive to continuously learn and master new technologies, pushing the boundaries of what's
                    possible. <br/> <br/>

                    Interested in collaborating? Let's chat! Hit me up at<br/>
                    <a className="about-link" href="mailto:this.agarwal@gmail.com">this.agarwal@gmail.com</a>

                </p>
            </section>
        )
    }
}