import React from 'react'
import TimeLine from '../Sections/TimeLine'
import Skills from '../Sections/Skills'

function Resume() {
    return (
        <article className="resume" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>
            <TimeLine />
            <Skills />
        </article>
    )
}

export default Resume