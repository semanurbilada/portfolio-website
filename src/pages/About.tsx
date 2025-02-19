import React from "react";

const About: React.FC = () => {
    return(
        <div className="page-default flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-evenly">
            {/* Experience Timeline */}
            <div className="md:w-2/3"> {/*TODO: title should centered?*/}
                <h2 className="text-center w-full text-lg md:text-xl font-semibold mt-8 mb-4">Experience & Education</h2>
                <ol className="relative text-start text-sm md:text-base border-s border-gray-700">  
                    <li className="mb-10 mt-5 ms-4 text-start">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024 - August 2024</time>
                        <h3 className="about-title text-start"> 
                            <a href="https://deltav.com.tr/en/" target="_blank" rel="noreferrer">ENGINEER INTERN - DeltaV Space Technologies</a>
                        </h3>
                        <p className="about-p">Participation in field tests and work in Research and Development (R&D).</p>
                    </li>  

                    <li className="mb-10 ms-4 text-start">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2023 - May 2023</time>
                        <h3 className="about-title">
                            <a href="https://pirireis.edu.tr/en/" target="_blank" rel="noreferrer">STUDENT ASSISTANT - Piri Reis University</a> - Faculty of Engineering
                        </h3>
                    </li>

                    <li className="mb-10 ms-4 text-start">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023 - November 2023</time>
                        <h3 className="about-title">
                            <a href="https://www.t3vakfi.org/en/" target="_blank" rel="noreferrer">RISING STAR SCHOLARSHIP - T3 Foundation</a>
                        </h3>
                        <p className="about-p">Worked in Information Technologies Coordination: Front-End side of a Full-Stack Project.</p>
                        <p className="about-p">Served as a member of the Defense, Aerospace Technologies Committee.</p>
                    </li>

                    <li className="-mb-14 ms-4 text-start">
                        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 - August 2023</time>
                        <h3 className="about-title"> 
                            <a href="https://intellium.com.tr" target="_blank" rel="noreferrer">SUMMER INTERN - Intellium</a>
                        </h3>
                        <p className="about-p">Developed AI side of a Full-Stack Project using Python and TensorFlow.</p>
                    </li>
                </ol>
            </div>

            {/* Education Section */}
            <div className="md:w-1/3 bg-greenery-500 rounded-full p-8 shadow-2xl">
                <h3 className="md:text-base text-sm font-semibold">
                    <a href="https://pirireis.edu.tr/en/" target="_blank" rel="noreferrer">
                        Piri Reis University
                    </a> 
                </h3>
                <p className="text-greenery-100 text-sm">2021 - Present</p>
                <p className="about-title text-center md:text-base text-sm font-semibold mt-1">B.Sc. in Information Systems Engineering</p>
                <p className="about-p text-greenery-100 text-center text-sm">Senior Year Student | AI, Robotics and Autonomy Projects</p>
            </div>
        </div>
    );    
}

export default About;