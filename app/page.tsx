import React from 'react'
import About from './Sections/About'
import Service from './Sections/Service'
import Testimonials from './Sections/Testimonials'


export default function Home() {
    return (
        <article className="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <About />
            <Service />
            <Testimonials />
        </article>
    );
}
