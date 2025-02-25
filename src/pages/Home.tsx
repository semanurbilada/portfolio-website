import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const contentArray = [
        {
            h1: (
                <>
                    Information Systems Engineering Student who currently interested with; <br />
                    <span className="bg-greenery-default italic">Front-End</span>,{" "}
                    <span className="p-1 bg-greenery-default italic">Robotics</span> &{" "}
                    <span className="p-1 bg-greenery-default italic">Aerospace !</span>
                </>
            ),
        },
        {
            h1: (
                <>
                    Technology that I use:<br />
                    <span className="bg-greenery-default italic">React</span>,{" "}
                    <span className="p-1 bg-greenery-default italic">Tailwind</span> &{" "}
                    <span className="p-1 bg-greenery-default italic"> Python</span>
                    {/* tech's logos */}
                </>
            ),
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % contentArray.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [contentArray.length]);

    return (
        <div className="page-default my-0 flex flex-col items-center justify-center">
            <section className="h-screen flex md:flex-row flex-col items-center justify-center text-3xl md:gap-2 gap-8">
                <img
                    className="rounded-full md:w-60 md:h-60 w-44 h-44 md:hover:scale-105 md:cursor-pointer animation md:top-60 top-0 object-cover"
                    src={`${process.env.PUBLIC_URL}/assets/profil.png`}
                    alt="profile"
                />

                {/* Dynamic content */}
                <div>
                    <h1 className="font-fira md:text-end text-center md:text-3xl text-xl tracking-wide md:leading-10">
                        {/* {contentArray[currentIndex].h1} */}
                        Information Systems Engineering Student who currently interested with; <br />
                        <span className="bg-greenery-default italic">Front-End</span>,{" "}
                        <span className="p-1 bg-greenery-default italic">Robotics</span> &{" "}
                        <span className="p-1 bg-greenery-default italic">Aerospace !</span>
                    </h1>
                </div>
            </section>
        </div>
    );
};

export default Home;