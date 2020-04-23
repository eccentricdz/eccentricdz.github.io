import React from 'react';
import './Work.scss'
import Project from './Project';
import projects from '../projects.json';

export default class Work extends React.Component {
    render() {
        return (
            <section className="work">
                { projects.map((project, index) => {
                    const { id, description, title, url, tags } = project;
                    return (
                        <Project
                        key={index}
                        id={id}
                        title={title}
                        description={description}
                        tags={tags}
                        url={url}
                        ></Project>
                    )
                }) }
            </section>
        )
    }
}