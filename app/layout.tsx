import "./globals.css";
import type { Metadata } from "next";
import Aside from "./Components/Aside";
import NavBar from "./Components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shlok Chaitanya - Web and Android Developer from India",
    description: "Explore the portfolio of Shlok Chaitanya, a passionate Web and Android Developer with expertise in Next.js, Cyber Security, Graphic Design, and Project Management.",
    keywords: "Shlok Chaitanya, Web Developer, Android Developer, Next.js, Cyber Security, Graphic Design, UI/UX Design, Project Management, India",
    authors: [{
        name: "Shlok Chaitanya",
        url: "https://shlokchaitanya.me/"
    }],
    openGraph: {
        title: "Shlok Chaitanya - Web and Android Developer from India",
        description: "Dive into the professional journey of Shlok Chaitanya, an Web and Android Development, with skills in Graphic Design, UI/UX Design, and Project Management.",
        url: "https://shlokchaitanya.me/",
        type: "website",
        images: [
            {
                url: "https://pbs.twimg.com/profile_banners/1526486296113577984/1652949395/1080x360",
                width: 800,
                height: 600,
                alt: "Shlok Chaitanya - Web and Android Developer",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: "@shlokchaitanya",
        title: "Shlok Chaitanya - Web and Android Developer from India",
        description: "Discover the work of Shlok Chaitanya, a developer with a passion for Next.js, Cyber Security, and modern design practices.",
        images: [
            {
                url: "https://pbs.twimg.com/profile_banners/1526486296113577984/1652949395/1080x360"
            }
        ]
    },
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>
                    <Aside />
                    <div className="main-content">
                        <NavBar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
