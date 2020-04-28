import React from 'react';
import './Work.scss'
import Project from './Project';
import Curtain from './Curtain';
import projects from '../projects.json';

export default class Work extends React.Component {
    render() {
        return (
            <section className="work">
                <Curtain></Curtain>
                { projects.map((project, index) => {
                    const { id, description, title, url, tags, extension } = project;
                    return (
                        <Project
                        key={index}
                        id={id}
                        title={title}
                        description={description}
                        tags={tags}
                        url={url}
                        imageExtension={ extension == undefined ? "jpg" : extension }
                        clickHandler={(id) => this.props.clickHandler(id)}
                        ></Project>
                    )
                }) }
            </section>
        )
    }
}