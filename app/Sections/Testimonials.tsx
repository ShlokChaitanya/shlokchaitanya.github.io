import React from 'react'
import dp1 from '../Assets/images/avatar-1.png'
import dp2 from '../Assets/images/avatar-2.png'
import dp3 from '../Assets/images/avatar-3.png'
import dp4 from '../Assets/images/avatar-4.png'
import Image from 'next/image'

const TestimonialsData = [
    { name: "Next.js", text: "Next.js has been my go-to framework for building websites, including this portfolio. It’s like the Swiss Army knife of web development—efficient, powerful, and surprisingly fun to use! I highly recommend it if you want to impress your clients and your developer friends alike.", dp: dp1 },
    { name: "Cyber Security", text: "Cyber Security is no joke, and neither are my skills in keeping your data safe. Think of me as your digital guardian angel—protecting your apps and websites from cyber villains 24/7. Rest easy knowing your bits and bytes are in good hands.", dp: dp2 },
    { name: "Web3 & Blockchain", text: "Web3 and blockchain are more than just buzzwords—they’re the future of digital transactions. Dive into the blockchain with me, and together we’ll build decentralized apps that’ll make your competitors jealous!", dp: dp3 },
    { name: "AI & Machine Learning", text: "AI and Machine Learning aren’t just for sci-fi anymore—they’re powering the apps of tomorrow. Let’s harness the power of AI to automate your workflows and impress your users with predictive magic.", dp: dp4 }
]

function Testimonials() {
    return (
        <section className="testimonials">
            <h3 className="h3 testimonials-title">Learning Pathway</h3>
            <ul className="testimonials-list has-scrollbar">
                {TestimonialsData.map((data, index) => (
                    <li className="testimonials-item" key={index}>
                        <div className="content-card" data-testimonials-item>
                            <figure className="testimonials-avatar-box">
                                <Image src={data.dp} alt="avatar" className="testimonials-avatar" />
                            </figure>
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>{data.name}</h4>
                            <div className="testimonials-text" data-testimonials-text>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Testimonials