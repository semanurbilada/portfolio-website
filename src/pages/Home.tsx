import React from "react";
import { Link } from "react-router-dom";

const researchTopics = [
    "Trustworthy AI",
    "Explainable & Interpretable AI",
    "Model Robustness",
    "Vision-Language Models",
    "Computer Vision",
    "Autonomous Robotics"
];

const publications = [
    {
        title: "Detection of Blood Cells in Microscopic Images Using YOLOv5",
        venue: "IEEE SIU 2026",
        doi: "https://doi.org/10.1109/SIU71813.2026.11636881"
    },
    {
        title: "Swarm Coordination in Hybrid Unmanned Surface Vehicle Platforms Featuring Integrated Drone Deployment",
        venue: "IEEE ELECO 2025",
        doi: "https://doi.org/10.1109/ELECO69582.2025.11329363"
    }
];

const Home: React.FC = () => {
    return (
        <div className="page-default my-0 w-full flex flex-col items-center justify-start">
            <main className="w-full max-w-6xl mx-auto px-6 md:px-10">
                {/* ================= HERO SECTION ================= */}
                <section className="min-h-screen flex md:flex-row flex-col items-center justify-center md:gap-14 gap-8 py-24 md:py-16">
                    {/* Profile Picture */}
                    <img
                        className="rounded-full md:w-60 md:h-60 w-44 h-44 md:hover:scale-105 md:cursor-pointer animation object-cover shrink-0"
                        src={`${process.env.PUBLIC_URL}/assets/profile.png`}
                        alt="Semanur Bilada"
                    />

                    {/* Introduction */}
                    <div className="md:max-w-2xl">
                        <h1 className="font-fira md:text-end text-center md:text-3xl text-xl tracking-wide md:leading-10 leading-relaxed">
                            M.Sc. Student in{" "}
                            <span className="bg-greenery-default italic">
                                Electrical and Electronics Engineering
                            </span>
                            <br />

                            & Assistant Project Specialist at{" "}
                            <span className="italic">
                                Piri Reis University.
                            </span>
                            <br />
                            <br />
                            Exploring{" "}
                            <span className="bg-greenery-default italic">
                                Artificial Intelligence
                            </span>
                            ,{" "}
                            <span className="bg-greenery-default italic">
                                Robotics
                            </span>
                            {" "}&{" "}
                            <span className="bg-greenery-default italic">
                                Trustworthy AI
                            </span>
                            .
                            <br />
                            With a focus on{" "}
                            <span className="italic">
                                Computer Vision, Autonomous Systems
                            </span>
                            {" "}&{" "}
                            <span className="p-1 bg-greenery-default italic">
                                Explainable AI.
                            </span>
                        </h1>

                        {/* Navigation Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-8">
                            <Link
                                to="/projects"
                                className="
                                    inline-flex items-center justify-center
                                    px-5 py-3 rounded-full
                                    bg-greenery-500
                                    text-sm font-semibold
                                    shadow-md
                                    transition-all duration-300
                                    hover:shadow-xl hover:-translate-y-1
                                "
                            >
                                Explore Projects ↗
                            </Link>

                            <Link
                                to="/about"
                                className="
                                    inline-flex items-center justify-center
                                    px-5 py-3 rounded-full
                                    border border-greenery-500
                                    text-sm font-semibold
                                    transition-all duration-300
                                    hover:bg-greenery-500/20
                                    hover:shadow-lg hover:-translate-y-1
                                "
                            >
                                About Me ↗
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= RESEARCH INTERESTS ================= */}
                <section className="w-full mb-20 md:mb-24">
                    <div className="border-t border-gray-700/30 pt-12 md:pt-16">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold text-center mb-6">
                            <span className="bg-greenery-default italic px-2">
                                Research Interests
                            </span>
                        </h2>

                        <p className="about-p text-center max-w-4xl mx-auto leading-relaxed mb-9">
                            My current research focuses on Trustworthy AI,
                            with particular interests in explainable and
                            interpretable AI, model robustness and
                            vision-language models.
                            I am also interested in applying AI to
                            computer vision, robotics and autonomous systems.
                        </p>

                        {/* Research Topic Tags */}
                        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                            {researchTopics.map((topic) => (
                                <span
                                    key={topic}
                                    className="
                                        inline-flex items-center justify-center
                                        text-center
                                        bg-greenery-500/20
                                        border border-greenery-500/40
                                        rounded-full
                                        px-5 py-2.5
                                        text-sm font-medium
                                        shadow-sm
                                        transform
                                        transition-all duration-300 ease-in-out
                                        hover:bg-greenery-500/40
                                        hover:border-greenery-500
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        hover:scale-105
                                        cursor-default
                                    "
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center mt-9">
                            <Link
                                to="/about"
                                className="text-sm font-semibold border-b border-greenery-900 pb-1 transition-all duration-300 hover:text-greenery-900"
                            >
                                Learn More About Me ↗
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= FEATURED PROJECT ================= */}
                <section className="w-full mb-20 md:mb-24">
                    <h2 className="font-fira text-xl md:text-2xl font-semibold text-center mb-10">
                        <span className="bg-greenery-default italic px-2">
                            Featured Project
                        </span>
                    </h2>

                    <article
                        className="
                            bg-greenery-500/10
                            border border-greenery-500/30
                            rounded-3xl overflow-hidden
                            shadow-xl
                            transition-all duration-300
                            hover:shadow-2xl
                        "
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
                            {/* TALAZ Project Image */}
                            <div className="relative min-h-64 md:min-h-80">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/projects/talaz/talaz-1.webp`}
                                    alt="TALAZ H-USV autonomous surface vehicle"
                                    loading="lazy"
                                    className="w-full h-full absolute inset-0 object-cover"
                                />
                            </div>

                            {/* Project Summary */}
                            <div className="flex flex-col justify-center p-7 md:p-9">
                                <span className="text-xs md:text-sm text-gray-600 text-start mb-3">
                                    AI & Autonomous Robotics | 2023 - 2025
                                </span>

                                <h3 className="font-fira text-xl md:text-2xl font-semibold text-start mb-4">
                                    TALAZ H-USV
                                </h3>

                                <p className="about-p text-start leading-relaxed mb-5">
                                    A BAP-funded hybrid unmanned surface
                                    vehicle project integrating AI-based
                                    computer vision, autonomous navigation,
                                    camera-LiDAR perception and communication
                                    systems.
                                </p>

                                <p className="about-p text-start leading-relaxed mb-7">
                                    Founded and led the PRU-İDA team,
                                    contributing to interdisciplinary
                                    development and international
                                    robotics competitions.
                                </p>

                                <div className="flex flex-wrap justify-start gap-2 mb-8">
                                    {[
                                        "YOLO",
                                        "Computer Vision",
                                        "Camera-LiDAR",
                                        "Autonomous Navigation"
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-greenery-500/20 rounded-full px-3 py-1.5 text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-start">
                                    <Link
                                        to="/projects"
                                        className="
                                            inline-flex items-center justify-center
                                            bg-greenery-500
                                            rounded-full
                                            px-5 py-3
                                            text-sm font-semibold
                                            transition-all duration-300
                                            hover:shadow-xl
                                            hover:-translate-y-1
                                        "
                                    >
                                        Explore TALAZ Project ↗
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* ================= SELECTED PUBLICATIONS ================= */}
                <section className="w-full mb-16">
                    <div className="border-t border-gray-700/30 pt-12 md:pt-16">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold text-center mb-5">
                            <span className="bg-greenery-default italic px-2">
                                Selected Publications
                            </span>
                        </h2>

                        <p className="about-p text-center max-w-3xl mx-auto mb-10">
                            Peer-reviewed research in computer vision
                            and autonomous robotic systems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {publications.map((publication) => (
                                <article
                                    key={publication.doi}
                                    className="
                                        bg-greenery-500/10
                                        border border-greenery-500/30
                                        rounded-2xl
                                        p-6 md:p-7
                                        shadow-sm
                                        flex flex-col
                                        transition-all duration-300
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                    "
                                >
                                    <p className="text-xs text-gray-600 text-start mb-3">
                                        {publication.venue}
                                    </p>

                                    <h3 className="font-semibold text-base md:text-lg text-start leading-relaxed mb-6">
                                        {publication.title}
                                    </h3>

                                    <div className="mt-auto flex justify-start">
                                        <a
                                            href={publication.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                inline-flex items-center justify-center
                                                rounded-full
                                                bg-greenery-500
                                                px-5 py-2.5
                                                text-sm font-semibold
                                                transition-all duration-300
                                                hover:shadow-lg
                                                hover:scale-105
                                            "
                                        >
                                            View DOI ↗
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Academic Profile */}
                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <Link
                                to="/projects"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    border border-greenery-500
                                    px-6 py-3
                                    text-sm font-semibold
                                    transition-all duration-300
                                    hover:bg-greenery-500/20
                                    hover:shadow-lg
                                "
                            >
                                View All Projects & Publications ↗
                            </Link>

                            <a
                                href="https://scholar.google.com/citations?hl=tr&user=jelLK84AAAAJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex items-center justify-center
                                    rounded-full
                                    border border-greenery-500
                                    px-6 py-3
                                    text-sm font-semibold
                                    transition-all duration-300
                                    hover:bg-greenery-500/20
                                    hover:shadow-lg
                                "
                            >
                                Google Scholar ↗
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;