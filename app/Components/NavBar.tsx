"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBarLinks = [
    { title: 'About', link: '/' },
    { title: 'Resume', link: '/Resume' },
    { title: 'Portfolio', link: '/Portfolio' },
    { title: 'Contact', link: '/Contact' },
];

function NavBar() {
    const route = usePathname();
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {NavBarLinks.map((link, index) => (
                    <li className="navbar-item" key={index}>
                        <Link href={link.link} className={`navbar-link ${route === link.link ? 'active' : ''}`}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar