import React from "react";

const Home: React.FC = () => {
    return (
        <div className="page-default my-0 flex flex-col items-center justify-center">
            <section className="min-h-screen flex md:flex-row flex-col items-center justify-center md:gap-14 gap-8 px-6 py-16">

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
                </div>

            </section>
        </div>
    );
};

export default Home;