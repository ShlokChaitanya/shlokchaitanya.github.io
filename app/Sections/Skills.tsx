import React from 'react'

const SkillsData = [
    { name: 'Web Development', value: 85 },
    { name: 'Graphic Design', value: 75 },
    { name: 'Android App Development', value: 80 },
    { name: 'UI / UX Design', value: 75 },
];

function SkillItem({ name, value } : { name: string, value: number }) {
    return (
        <li className="skills-item">
            <div className="title-wrapper">
                <h5 className="h5">{name}</h5>
                <data value={value}>{value}%</data>
            </div>
            <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${value}%` }}></div>
            </div>
        </li>
    )
}

function Skills() {
    return (
        <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>
            <ul className="skills-list content-card">
                {SkillsData.map((skill, index) => <SkillItem key={index} name={skill.name} value={skill.value} />)}
            </ul>
        </section>
    )
}

export default Skills