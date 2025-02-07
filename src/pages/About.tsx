import React from "react";
// TODO: Experience & Education timelines!

const About: React.FC = () => {
    return(
        <div className="page-default flex flex-col items-center justify-center">
            <ol className="relative text-start text-sm md:text-base border-s border-gray-700">  
                <li className="mb-10 mt-5 ms-4 text-start md:text-center">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024 - August 2024</time>
                    <h3 className="about-title text-start md:text-center"> 
                        <a href="https://deltav.com.tr/en/" target="_blank" rel="noreferrer">ENGINEER INTERN - DeltaV Space Technologies</a>
                    </h3>
                    <p className="about-p">
                        Participation of the field tests and work in Research and Development (R&D).
                    </p>
                </li>  

                <li className="mb-10 ms-4 text-start md:text-center">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2023 - May 2023</time>
                    <h3 className="about-title">
                        <a href="https://pirireis.edu.tr/en/" target="_blank" rel="noreferrer">STUDENT ASSISTANT - Piri Reis University</a> - Faculty of Engineering
                    </h3>
                </li>

                <li className="mb-10 ms-4 text-start md:text-center">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023 - November 2023</time>
                    <h3 className="about-title">
                        <a href="https://www.t3vakfi.org/en/" target="_blank" rel="noreferrer">RISING STAR SCHOLARSHIP - T3 Foundation</a>
                    </h3>
                    <p className="about-p">Work in Information Technologies Coordinator: Front-End side of a Full-Stack Project.</p>
                    <p className="about-p">Serving as a member of the Defense, Aerospace Technologies Committe.</p>
                </li>

                <li className="-mb-14 ms-4 text-start md:text-center">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 - August 2023</time>
                    <h3 className="about-title"> 
                        <a href="https://intellium.com.tr" target="_blank" rel="noreferrer">SUMMER INTERNSHIP - Intellium</a>
                    </h3>
                    <p className="about-p">Developed AI side of a Full-Stack Project using Python and Tensorflow.</p>
                </li>
            </ol>
        </div>
    );    
}

export default About;