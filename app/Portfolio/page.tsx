import React from 'react'
import Projects from '../Sections/Projects'

function Portfolio() {
    return (
        <article className="portfolio" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <Projects />
        </article>
    )
}

export default Portfolio