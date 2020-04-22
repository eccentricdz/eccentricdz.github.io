import React from 'react';
import './Project.scss'

export default class Project extends React.Component {
    render() {
        return (
            <section className="project" id={this.props.id}>
                <a className="project-link" href={this.props.url} rel="noopener noreferrer" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/project-images/${this.props.id}.jpg`} alt={this.props.title}></img>
                </a>
                <div className="project-details">
                    <div className="project-details-top">
                        <p className="project-title">{this.props.title}</p>
                        <div className="project-divider"></div>
                        <p className="project-description">{this.props.description}</p>
                    </div>
                    <div className="project-details-bottom">
                        <p className="project-tags">{this.props.tags}</p>
                    </div>
                </div>
            </section>
        )
    }
}