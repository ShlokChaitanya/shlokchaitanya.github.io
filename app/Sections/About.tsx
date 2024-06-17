import React from 'react'

const AboutData = [
    "I'm a passionate Web and Android Developer from India with a strong interest in creating efficient and innovative solutions. Currently, I'm deepening my expertise in Next.js and Cyber Security to enhance the security and performance of my projects.",
    "In Web Development, I excel at crafting responsive and user-friendly websites using modern technologies. My approach combines practical experience with a continuous drive to stay updated with industry trends and best practices. I also bring solid skills in Android App Development, where I focus on building functional and engaging mobile applications.",
    "Additionally, I have a background in Graphic Design and UI/UX Design, allowing me to create visually appealing and intuitive interfaces. I'm committed to refining my design skills and staying abreast of the latest design trends. With experience in Project Management, I've successfully overseen projects from inception to delivery, ensuring they meet client expectations while honing my organizational and leadership abilities."
];

function About() {
    return (
        <section className="about-text">
            {AboutData.map((data, index) => (
                <p key={index}>{data}</p>
            ))}
        </section>
    )
}

export default About