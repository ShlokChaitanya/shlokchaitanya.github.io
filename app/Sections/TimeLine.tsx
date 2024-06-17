import { faBook, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const TimeLineData = [
    { id: 1, title: 'Indian School Certificate (ISC), CISCE', date: '2024 — Present', text: 'Currently pursuing ISC studies with a focus on PCM (Physics, Chemistry, Mathematics) + Computer Science stream. Gaining advanced knowledge in sciences and computer technology, enhancing analytical thinking, and programming skills.' },
    { id: 2, title: 'Council for the Indian School Certificate Examinations (CISCE)', date: '2023 — 2024', text: 'Studied under the CISCE curriculum, completing my Class 10th education. Developed foundational skills across various subjects, emphasizing critical thinking and problem-solving.' },
];

const TimeLineData2 = [
    {
        id: 1,
        title: 'Lead Developer',
        date: '2023 — 2024',
        text: 'As the Lead Web Designer at Ignite Vortex (SMMA), I strategically manage and execute 95% of all projects, including websites for Ignite Vortex, Spiritual Boat, and multiple clients. Integrated secure payment gateways like Razorpay and Paytm to streamline transaction processes. Utilizing advanced UX/UI strategies, I optimize functionality and elevate user experience to drive client satisfaction and project success.'
    },
    {
        id: 2,
        title: 'Freelance Developer',
        date: '2021 — 2023',
        text: 'As a freelance developer, created "Meet Forever" Android app using Firebase for real-time database and authentication. Integrated Jitsi Meet SDK for video conferencing functionality similar to Zoom. Also developed a website for RVD Buildtech Pvt Ltd.'
    }
];


function TimeLineItem({ title, date, text }: { title: string, date: string, text: string }) {
    return (
        <li className="timeline-item">
            <h4 className="h4 timeline-item-title">{title}</h4>
            <span>{date}</span>
            <p className="timeline-text">{text}</p>
        </li>
    )
}

function TimeLine() {
    return (<>
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FontAwesomeIcon icon={faBook} />
                </div>
                <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
                {TimeLineData.map((item) => <TimeLineItem key={item.id} title={item.title} date={item.date} text={item.text} />)}
            </ol>
        </section>
        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FontAwesomeIcon icon={faTrophy} />
                </div>
                <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
                {TimeLineData2.map((item) => <TimeLineItem key={item.id} title={item.title} date={item.date} text={item.text} />)}
            </ol>
        </section>
    </>
    )
}

export default TimeLine