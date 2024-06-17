import React from 'react'
import icon1 from '../Assets/images/icon-web-design.svg'
import icon2 from '../Assets/images/icon-web-development.svg'
import icon3 from '../Assets/images/icon-mobile-apps.svg'
import icon4 from '../Assets/images/icon-quote.svg'
import Image from 'next/image'

const ServiceData = [
    { title: "UI/UX Design", text: "Crafting intuitive user interfaces and engaging user experiences. ", icon: icon1 },
    { title: "Web development", text: "Development of sites of any complexity and functionality.", icon: icon2 },
    { title: "Mobile apps", text: "Development of mobile applications for Android and iOS.", icon: icon3 },
    { title: "Backend & Database Management", text: "Professional photography and photo processing.", icon: icon4 }
]

function Service() {
    return (
        <section className="service">
            <h3 className="h3 service-title">What I&apos;m doing</h3>
            <ul className="service-list">
                {ServiceData.map((data, index) => (
                    <li className="service-item" key={index}>
                        <div className="service-icon-box">
                            <Image src={data.icon} alt="icon" className="service-icon" />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">{data.title}</h4>
                            <p className="service-item-text">{data.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Service