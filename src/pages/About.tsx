import React from "react";
import Icons from "../components/icons/Icons";

const About: React.FC = () => {
    const researchTopics = [
        "Trustworthy AI",
        "Explainable & Interpretable AI",
        "Model Robustness",
        "Vision-Language Models",
        "Computer Vision",
        "Autonomous Robotics"
    ];

    return (
        <div className="page-default relative z-0 w-full min-h-screen">
            <main className="w-full max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-44 pb-24">
                {/* Page Header */}
                <header className="text-center mb-10 md:mb-20">
                    <h1 className="font-fira md:text-4xl font-semibold">
                        <span className="bg-greenery-default text-2xl italic px-2">
                            Experience & Education
                        </span>
                    </h1>

                    <p className="about-p mt-5 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed">
                        My academic background, professional experience
                        and ongoing research interests.
                    </p>
                </header>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-16 items-start">
                    {/* Professional Experience */}
                    <section className="lg:col-span-3">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold mb-10">
                            Professional Experience
                        </h2>

                        <ol className="relative border-s border-gray-700 ml-2">
                            {/* Current Position */}
                            <li className="mb-12 ms-6 relative">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[30px] bg-gray-700"></div>

                                <time className="text-sm text-gray-500">
                                    November 2025 - Present
                                </time>

                                <h3 className="about-title mt-2">
                                    <a
                                        href="https://pirireis.edu.tr/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ASSISTANT PROJECT SPECIALIST
                                    </a>
                                </h3>

                                <p className="font-medium text-sm md:text-base mt-1">
                                    Piri Reis University
                                </p>

                                <p className="about-p mt-3 leading-relaxed">
                                    Research Dean's Office | Supporting academic
                                    research projects, university-wide R&D
                                    activities and project management processes.
                                </p>
                            </li>

                            {/* DeltaV */}
                            <li className="mb-12 ms-6 relative">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[30px] bg-gray-700"></div>

                                <time className="text-sm text-gray-500">
                                    July 2024 - August 2024
                                </time>

                                <h3 className="about-title mt-2">
                                    <a
                                        href="https://deltav.com.tr/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        R&D ENGINEER INTERN
                                    </a>
                                </h3>

                                <p className="font-medium text-sm md:text-base mt-1">
                                    DeltaV Space Technologies
                                </p>

                                <p className="about-p mt-3 leading-relaxed">
                                    Worked on avionics communication systems and participated in R&D activities, 
                                    field tests and rocket operations involving domestically developed hybrid rocket technologies.
                                </p>
                            </li>

                            {/* Student Assistant */}
                            <li className="mb-12 ms-6 relative">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[30px] bg-gray-700"></div>

                                <time className="text-sm text-gray-500">
                                    December 2023 - May 2024
                                </time>

                                <h3 className="about-title mt-2">
                                    <a
                                        href="https://pirireis.edu.tr/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        STUDENT ASSISTANT
                                    </a>
                                </h3>

                                <p className="font-medium text-sm md:text-base mt-1">
                                    Piri Reis University
                                </p>

                                <p className="about-p mt-3 leading-relaxed">
                                    Part-time Student Assistant at the
                                    Faculty of Engineering.
                                </p>
                            </li>

                            {/* T3 Foundation */}
                            <li className="mb-12 ms-6 relative">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[30px] bg-gray-700"></div>

                                <time className="text-sm text-gray-500">
                                    February 2023 - November 2023
                                </time>

                                <h3 className="about-title mt-2">
                                    <a
                                        href="https://www.t3vakfi.org/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        RISING STAR SCHOLAR
                                    </a>
                                </h3>

                                <p className="font-medium text-sm md:text-base mt-1">
                                    T3 Foundation
                                </p>

                                <p className="about-p mt-3 leading-relaxed">
                                    Selected as one of 100 university students for the
                                    T3 Foundation's Rising Star Scholarship Program.
                                    Contributed to front-end development within the
                                    Information Technologies Coordination Office and
                                    aerospace research through the Defense and
                                    Aerospace Technologies Committee.
                                </p>
                            </li>

                            {/* Intellium */}
                            <li className="ms-6 relative">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[30px] bg-gray-700"></div>

                                <time className="text-sm text-gray-500">
                                    July 2023 - August 2023
                                </time>

                                <h3 className="about-title mt-2">
                                    <a
                                        href="https://intellium.com.tr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SOFTWARE ENGINEER INTERN
                                    </a>
                                </h3>

                                <p className="font-medium text-sm md:text-base mt-1">
                                    Intellium
                                </p>

                                <p className="about-p mt-3 leading-relaxed">
                                    As part of a full-stack development team,
                                    developed a machine learning-based chatbot
                                    using Python and TensorFlow.
                                </p>
                            </li>
                        </ol>
                    </section>

                    {/* Education */}
                    <section className="lg:col-span-2 w-full">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold mb-10">
                            Education
                        </h2>

                        <div className="flex flex-col gap-6">
                            {/* Master's Degree */}
                            <div className="bg-greenery-500 rounded-3xl p-7 shadow-xl hover:shadow-2xl animation">
                                <p className="text-greenery-100 text-sm mb-3">
                                    2025 - Present
                                </p>

                                <h3 className="font-semibold text-lg">
                                    <a
                                        href="https://pirireis.edu.tr/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Piri Reis University (PRU)
                                    </a>
                                </h3>

                                <p className="font-semibold mt-4 leading-relaxed">
                                    M.Sc. in Electrical and Electronics Engineering
                                </p>

                                <p className="text-greenery-100 text-sm mt-3">
                                    AI & Trustworthy AI
                                </p>
                            </div>

                            {/* Bachelor's Degree */}
                            <div className="bg-greenery-500 rounded-3xl p-7 shadow-xl hover:shadow-2xl animation">
                                <p className="text-greenery-100 text-sm mb-3">
                                    2021 - 2025
                                </p>

                                <h3 className="font-semibold text-lg">
                                    <a
                                        href="https://pirireis.edu.tr/en/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Piri Reis University (PRU)
                                    </a>
                                </h3>

                                <p className="font-semibold mt-4 leading-relaxed">
                                    B.Sc. in Information Systems Engineering
                                </p>

                                <p className="text-greenery-100 text-sm mt-3">
                                    Robotics, Computer Vision & Autonomous Systems
                                </p>
                            </div>


                            {/* PRU Robotics - Leadership & Activities */}
                            <div className="mt-5">
                                <h3 className="font-fira text-lg md:text-xl font-semibold mb-5 text-center">
                                    Leadership & R&D (AI-Robotics)
                                </h3>

                                <div
                                    className="
                                        bg-greenery-500/10
                                        border border-accent-cyan/40
                                        rounded-3xl
                                        p-6 md:p-7
                                        shadow-lg
                                        transition-all duration-300 ease-in-out
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        hover:border-accent-blue/60
                                    "
                                >
                                    {/* Club Logo & Title */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-20 h-20 shrink-0 rounded-2xl bg-white/90 p-2 flex items-center justify-center shadow-sm">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/prurobotics-logo.jpg`}
                                                alt="PRU Robotics Club Logo"
                                                loading="lazy"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <h4 className="font-fira text-lg md:text-xl font-bold text-accent-purple text-start">
                                                PRU-Robotics
                                            </h4>

                                            <p className="text-sm text-gray-600 text-start mt-1">
                                                Piri Reis University Robotics Club
                                            </p>
                                        </div>
                                    </div>

                                    {/* Leadership Timeline */}
                                    <div className="border-l-2 border-accent-cyan/60 ml-2 pl-5 space-y-5">
                                        <div className="relative">
                                            <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-purple" />
                                            <h5 className="text-sm md:text-base font-semibold text-start">
                                                Chairman of the Board
                                            </h5>

                                            <p className="text-xs md:text-sm text-gray-600 text-start mt-1">
                                                Jun 2023 – May 2025
                                            </p>
                                        </div>

                                        <div className="relative">
                                            <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-blue" />

                                            <h5 className="text-sm md:text-base font-semibold text-start">
                                                Team Leader
                                            </h5>

                                            <p className="text-xs md:text-sm text-gray-600 text-start mt-1">
                                                Oct 2022 – Sep 2025
                                            </p>
                                        </div>

                                        <div className="relative">
                                            <span className="absolute -left-[27px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-cyan" />

                                            <h5 className="text-sm md:text-base font-semibold text-start">
                                                Technical Team Member
                                            </h5>

                                            <p className="text-xs md:text-sm text-gray-600 text-start mt-1">
                                                Dec 2021 – Oct 2022
                                            </p>
                                        </div>
                                    </div>

                                    {/* Short Description */}
                                    <p className="about-p text-sm leading-relaxed mt-6 text-start">
                                        Progressed from technical team member to team leader
                                        and club president, leading interdisciplinary robotics
                                        projects and coordinating student teams.
                                    </p>

                                    {/* Club Links */}
                                    <div className="flex flex-wrap items-center justify-start gap-5 mt-6">
                                        {/* Official Website */}
                                        <a
                                            href="https://robotics.pirireis.edu.tr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="PRU Robotics Official Website"
                                            className="
                                                inline-flex items-center gap-2
                                                text-sm font-semibold
                                                text-accent-purple
                                                transition-all duration-300
                                                hover:text-accent-blue
                                                hover:-translate-y-0.5
                                            "
                                        >
                                            <Icons
                                                iconName="website"
                                                className="shrink-0"
                                                size={""}
                                            />
                                            Website ↗
                                        </a>

                                        {/* GitHub */}
                                        <a
                                            href="https://github.com/PRU-Robotics"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="PRU Robotics GitHub"
                                            className="
                                                inline-flex items-center gap-2
                                                text-sm font-semibold
                                                text-accent-purple
                                                transition-all duration-300
                                                hover:text-accent-blue
                                                hover:-translate-y-0.5
                                            "
                                        >
                                            <Icons
                                                iconName="github"
                                                className="shrink-0"
                                                size={"17px"}
                                            />
                                            GitHub ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Research Interests */}
                <section className="relative z-10 w-full mt-20 md:mt-24">
                    <div className="w-full border-t border-gray-700/30 pt-12 md:pt-16">
                        {/* Section Title */}
                        <div className="text-center mb-6">
                            <h2 className="font-fira text-xl md:text-2xl font-semibold">
                                <span className="bg-greenery-default italic px-2">
                                    Research Interests
                                </span>
                            </h2>
                        </div>

                        {/* Research Description */}
                        <p className="about-p text-sm md:text-base leading-relaxed max-w-4xl mx-auto text-center mb-10">
                            My current research focuses on Trustworthy AI,
                            with particular interests in explainable and
                            interpretable AI, model robustness and
                            vision-language models.
                            I am also interested in applying AI to
                            computer vision, robotics and autonomous systems.
                        </p>

                        {/* Research Topic Tags */}
                        <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-4">
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
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;