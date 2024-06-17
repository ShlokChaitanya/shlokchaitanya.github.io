"use client"

import React, { useState } from 'react'
import { faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsData = [
    { name: 'Art Box', category: 'Web Design', image: require('../assets/images/project-7.png') },
    { name: 'GDSC ', category: 'Web Design', image: require('../assets/images/project-8.jpg') },
    { name: 'Ignite Vortex', category: 'Web Developement', image: require('../assets/images/project-3.jpg') },
    { name: 'Kajal Courses', category: 'Web Design', image: require('../assets/images/project-9.png') },
    { name: 'Meet Forever', category: 'Applications', image: require('../assets/images/project-4.png') },
    { name: 'Revital', category: 'Web Development', image: require('../assets/images/project-1.jpg'), link: "https://revital.tech/" },
    { name: 'RVD Buildtech Pvt Ltd', category: 'Web Development', image: require('../assets/images/project-2.png') },
    { name: 'Spiritual Boat', category: 'Web Developement', image: require('../assets/images/project-6.png') },
    { name: 'Utopia Blogs', category: 'Web Development', image: require('../assets/images/project-5.png') },
];

const Categories = [ 'All', 'Web design', 'Applications', 'Web development' ];


function Projects() {
    const [ct, setct] = useState('All');

    function btnClickListner(category: string) {
        console.log(category);
        setct(category);
    }
    
    function ProjectCard({ name, category, image } : { name: string, category: string, image: string }) {    
        const isVisible = ct === 'All' || ct.toLowerCase() === category.toLowerCase();
        return (
            <li className={`project-item ${isVisible ? "active" : ""}`}>
                <Link href="">
                    <figure className="project-img">
                        <div className="project-item-icon-box">
                            <FontAwesomeIcon icon={faEye} className="project-item-icon" />
                        </div>
                        <Image src={image} alt={name} loading="lazy" />
                    </figure>
                    <h3 className="project-title">{name}</h3>
                    <p className="project-category">{category}</p>
                </Link>
            </li>
        )
    }

    return (
        <section className="projects">
            <ul className="filter-list">
                {Categories.map((category, index) => (
                    <li key={index} className="filter-item">
                        <button onClick={() => btnClickListner(category)} className={ct === category ? 'active' : ''}>{category}</button>
                    </li>
                ))}
            </ul>
            <div className="filter-select-box">
                <button className="filter-select" data-select>
                    <div className="select-value" data-selecct-value>Select category</div>
                    <div className="select-icon">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </button>
                <ul className="select-list">
                    {Categories.map((category, index) => (
                        <li key={index} className="select-item">
                            <button data-select-item>{category}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="project-list">
                {ProjectsData.map((project, index) => (
                    <ProjectCard key={index} name={project.name} category={project.category} image={project.image} />
                ))}
            </ul>
        </section>
    )
}

export default Projects