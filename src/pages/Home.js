export default function Home() {
    return(
        <section className="section-default flex flex-col items-center justify-center">
            <div className="h-screen flex md:flex-row flex-col items-center justify-center text-3xl md:gap-0 gap-8">
                <img
                    className="rounded-full md:w-60 md:h-60 w-44 h-44 md:hover:scale-105 md:cursor-pointer animation md:top-60 top-0 object-cover"
                    src={`${process.env.PUBLIC_URL}/profil.png`} alt="profil"
                />
                <h1 className="font-fira md:text-end text-center text-3xl tracking-wide md:leading-10">
                    Information Systems Engineering Student who currently
                    interested with <span className=" bg-greenery-default italic"> Front-End</span> & <span className="p-1 bg-greenery-default italic"> Robotics !</span>
                </h1>
            </div>

            {/* 
                - intro (animation kullanılacak !) 
                - tech i use for my projects;

                <div className="h-screen flex">
                    <h2>The TECH i use :</h2>
                </div>
            */}
        </section>
    );
}