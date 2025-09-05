import React from 'react';
import { SuspenseImage } from './SuspenseImage';

import './Project.scss';

export const ProjectSkeleton = () => (
    <section className="project skeleton"></section>
)

export default class Project extends React.Component {
    render() {
        const projectTags = this.props.tags.split(",").map((tag, idx) => {
            return <p className="project-tags" key={idx}>{tag}</p>
        })

        return (
            <section className="project" id={this.props.id} onClick={() => this.props.clickHandler(this.props.id)}>
                <a className="project-link" href={this.props.url} rel="noopener noreferrer" target="_blank">
                    <SuspenseImage
                        src={`${process.env.PUBLIC_URL}/project-images/${this.props.id}.${this.props.imageExtension}`}
                        alt={this.props.title}
                        fallbackSrc={`${process.env.PUBLIC_URL}/project-images/portfolio.jpg`}
                    ></SuspenseImage>
                </a>
                <div className="project-details">
                    <div className="project-details-top">
                        <p className="project-title">{this.props.title}</p>
                        <div className="project-divider"></div>
                        <p className="project-description">{this.props.description}</p>
                    </div>
                    <div className="project-details-bottom">
                        {projectTags}
                    </div>
                </div>
            </section>
        )
    }
}