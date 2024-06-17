"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import dp from '../Assets/dp.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const contactData = [
    { icon: faEnvelope, title: 'Email', text: "support@shlokchaitanya.me", link: 'mailto:support@shlokchaitanya.me' },
    { icon: faGithub, title: 'Github', text: "Shlok Chaitanya", link: 'https://github.com/ShlokChaitanya' },
    { icon: faLinkedin, title: 'LinkedIn', text: "Shlok Chaitanya", link: 'https://www.linkedin.com/in/shlokchaitanya/' },   
    { icon: faLocation, title: 'Location', text: 'Gautam Buddha Nagar, Uttar Pradesh, India', link: "#" }
];

function Aside() {
    const [showMore, setShowMore] = useState(false);

    function tongleMore() {
        setShowMore(!showMore);
    }

    return (
        <aside className={`sidebar ${showMore && 'active'}`}>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image src={dp} alt="Shlok Chaitanya" width="80" height="80" loading="lazy" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Shlok Chaitanya</h1>
                    <p className="title">Full Stack Web developer</p>
                </div>
                <button className="info_more-btn" onClick={tongleMore}>
                    <span>Show Contacts</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    {contactData.map((contact, index) => (
                        <li className="contact-item" key={index}>
                            <div className="icon-box">
                                <FontAwesomeIcon icon={contact.icon} />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">{contact.title}</p>
                                {contact.link && <Link target='_blank' href={contact.link} className="contact-link">{contact.text}</Link>}
                            </div>
                        </li>
                    ))}
                </ul>
                
            </div>
        </aside>
    )
}

export default Aside