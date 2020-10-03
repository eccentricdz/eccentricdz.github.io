import React, { Suspense, useEffect, useReducer } from 'react';
import './Work.scss'
import Project from './Project';
import Curtain from './Curtain';
import SkeletonLoaders from './SkeletonLoaders';
import projectsArray from '../projects.json';

const Work = () => {
    const pageSize = 6;

    const projectReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_PAGE": {
                return { ...state, projectCount: projectsArray.size, projects: projectsArray }
            }
            default: return state;
        }
    }

    const [projectInfo, projectDispatch] = useReducer(projectReducer, { projectCount: pageSize, projects: projectsArray.slice(0, pageSize) })
    const [startTransition, isPending] = React.unstable_useTransition({ timeoutMs: 10000 });

    useEffect(() => {
        const scrollListener = () => {
            startTransition(() => {
                projectDispatch({ type: "INCREMENT_PAGE" });
            })
            document.removeEventListener("scroll", scrollListener);
        }
    
        document.addEventListener("scroll", scrollListener)
    }, [projectDispatch, startTransition])

    return (
        <section className="work">
            <Curtain></Curtain>
            <Suspense fallback={
                <SkeletonLoaders count={4}></SkeletonLoaders>
            }>
                {
                    projectInfo.projects.map((project, index) => {
                        const { id, description, title, url, tags, extension } = project;
                        return (
                            <Project
                                key={index}
                                id={id}
                                title={title}
                                description={description}
                                tags={tags}
                                url={url}
                                imageExtension={extension === undefined ? "jpg" : extension}
                                clickHandler={(id) => this.props.clickHandler(id)}
                            ></Project>
                        )
                    })
                }
                {
                    isPending ? <SkeletonLoaders count={4}></SkeletonLoaders> : null
                }
            </Suspense>
        </section>
    )
}

export default Work;