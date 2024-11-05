import React from "react";
// TODO
// About me infos
// Button for personal resume      

const About: React.FC = () => {
    return(
        <div className="page-default my-20 md:my-2 flex flex-col items-center justify-evenly">
            <ol className="relative text-start border-s border-gray-700 ">  
                <li className="mb-10 ms-4 flex ">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    
                    <div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2024 - August 2024</time>
                        <h3 className="text-lg font-semibold text-gray-900">ENGINEER INTERN - DeltaV Space Technologies</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Participation of the field tests and work in R&D (Research and Development) for communication.</p>
                    </div>
                </li>                
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2023 - May 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900">STUDENT ASSISTANT - Piri Reis University - Faculty of Engineering</h3>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023 - November 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900">RISING STAR SCHOLARSHIP - T3 Foundation</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Work in Information Technologies Coordinator: Front-End side of a Full-Stack Project.</p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Serving as a member of the Defense, Aerospace Technologies Committe.</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border-s border-gray-900 bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 - August 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900">SUMMER INTERNSHIP - Intellium</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Developed AI side of a Full-Stack Project using Python and Tensorflow.</p>
                </li>
            </ol>
        </div>
    );    
}

export default About;