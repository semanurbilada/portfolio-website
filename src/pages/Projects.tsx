import React, { useState, useEffect } from "react";
const ASSETS = `${process.env.PUBLIC_URL}/assets/projects`;

const talazImages = [
    {
        src: `${ASSETS}/talaz/talaz-1.jpg`,
        label: "TALAZ USV",
        caption: "Autonomous Unmanned Surface Vehicle (USV)"
    },
    {
        src: `${ASSETS}/talaz/talaz-2.jpg`,
        label: "Field Tests",
        caption: "Real-World Testing and Autonomous Navigation"
    },
    {
        src: `${ASSETS}/talaz/talaz-3.jpg`,
        label: "PRU-İDA Team | TEKNOFEST 2025",
        caption: "Blue Homeland (Mavi Vatan) – Interdisciplinary Robotics Team"
    },
    {
        src: `${ASSETS}/talaz/talaz-4.jpg`,
        label: "PRU-İDA Team | Njord Challenge 2025",
        caption: "Trondheim, Norway – International Autonomous USV Competition"
    }
];

type Project = {
    title: string;
    category: string;
    year: string;
    description: string;
    technologies: string[];
    github?: string;
    publication?: string;
    image?: string;
};

const projects: Project[] = [
    {
        title: "Biomedical Image Processing with YOLO",
        category: "Deep Learning & Computer Vision",
        year: "2024 - 2026",
        description:
            "Research-oriented biomedical image processing for blood cell detection and counting. Explored YOLO-based object detection, dataset preparation and model evaluation as part of a university-funded research project.",
        technologies: [
            "Python",
            "YOLOv5",
            "Deep Learning",
            "Computer Vision",
            "Dataset Curation",
            "BAP Project"
        ],
        github: "https://github.com/semanurbilada/BIP_BAP",
        publication:
            "https://doi.org/10.1109/SIU71813.2026.11636881",
        image: `${ASSETS}/biomedical.jpg`
    },
    {
        title: "Real-Time Monocular Depth Estimation",
        category: "AI & Visual Perception",
        year: "2025",
        description:
            "Developed a real-time depth estimation application using the MiDaS neural network, ONNX and OpenCV DNN in C++. Processes monocular camera frames and visualizes estimated depth maps with FPS information.",
        technologies: [
            "C++",
            "OpenCV",
            "MiDaS",
            "ONNX",
            "Neural Networks"
        ],
        github:
            "https://github.com/semanurbilada/RealTime-Depth-Camera",
        image: `${ASSETS}/depth-camera.jpg`
    },
    {
        title: "Machine Learning-Based Chatbot",
        category: "Machine Learning & Software",
        year: "2023",
        description:
            "Developed an open-source chatbot for integration into full-stack applications. Used Python, TensorFlow and a customizable intent dataset to support training and natural language interactions.",
        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "NLP",
            "Full-Stack Integration"
        ],
        github: "https://github.com/semanurbilada/chatbot",
        image: `${ASSETS}/chatbot.jpg`
    },
    {
        title: "DCT Image Steganography & Robustness Analysis",
        category: "Digital Image Processing",
        year: "2026",
        description:
            "Extended a DCT-based image steganography framework to analyze embedding behavior, image quality, capacity constraints and resistance to JPEG compression and noise.",
        technologies: [
            "Python",
            "DCT",
            "Image Processing",
            "JPEG",
            "Robustness Analysis"
        ],
        github:
            "https://github.com/semanurbilada/dct-image-steganography-study",
        image: `${ASSETS}/steganography.jpg`
    }
];

const publications = [
    {
        title:
            "Detection of Blood Cells in Microscopic Images Using YOLOv5",
        venue:
            "IEEE 34th Signal Processing and Communications Applications Conference (SIU)",
        year: "2026",
        doi:
            "https://doi.org/10.1109/SIU71813.2026.11636881"
    },
    {
        title:
            "Swarm Coordination in Hybrid Unmanned Surface Vehicle Platforms Featuring Integrated Drone Deployment",
        venue:
            "IEEE 16th International Conference on Electrical and Electronics Engineering (ELECO)",
        year: "2025",
        doi:
            "https://doi.org/10.1109/ELECO69582.2025.11329363"
    }
];

/* Reusable Technology Tag */
const TechTag: React.FC<{ label: string }> = ({ label }) => (
    <span
        className="
            inline-flex items-center justify-center
            rounded-full px-3 py-1.5
            text-xs md:text-sm font-medium
            bg-greenery-500/20
            border border-greenery-500/40
            transition-all duration-300
            hover:bg-greenery-500/40
            hover:shadow-lg hover:-translate-y-1
        "
    >
        {label}
    </span>
);

const ProjectImage: React.FC<{
    src: string;
    alt: string;
    className?: string;
}> = ({ src, alt, className = "" }) => {
    const [failed, setFailed] = useState(false);

    return failed ? (
        <div
            className={`
                flex items-center justify-center
                bg-greenery-500/20
                text-greenery-900
                text-sm font-medium text-center p-6
                ${className}
            `}
        >
            {alt}
        </div>
    ) : (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className={`object-cover ${className}`}
        />
    );
};

export default function Projects() {
    const [activeImage, setActiveImage] = useState(0);
    const [isGalleryPaused, setIsGalleryPaused] = useState(false);
    // Automatically change TALAZ images every 5 seconds
    useEffect(() => {
        if (isGalleryPaused || talazImages.length <= 1) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveImage(
                (prev) => (prev + 1) % talazImages.length
            );
        }, 3000);

        return () => window.clearInterval(interval);
    }, [isGalleryPaused]);


    const nextImage = () => {
        setActiveImage(
            (index) => (index + 1) % talazImages.length
        );
    };

    const previousImage = () => {
        setActiveImage(
            (index) =>
                (index - 1 + talazImages.length) %
                talazImages.length
        );
    };

    return (
        <div className="page-default relative z-0 w-full min-h-screen">
            <main className="w-full max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-44 pb-24">
                {/* Page Header */}
                <header className="text-center mb-14 md:mb-20">
                    <h1 className="font-fira text-2xl md:text-3xl font-semibold">
                        <span className="bg-greenery-default italic px-2">
                            Projects & Research
                        </span>
                    </h1>

                    <p className="about-p max-w-3xl mx-auto mt-5 text-center leading-relaxed">
                        Exploring artificial intelligence, computer vision
                        and autonomous robotics through research,
                        software development and real-world engineering.
                    </p>
                </header>

                {/* FEATURED PROJECT */}
                <section className="mb-20 md:mb-24">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold">
                            Featured Project
                        </h2>

                        <span className="text-xs md:text-sm font-medium bg-greenery-500/30 rounded-full px-4 py-2">
                            AI & Robotics
                        </span>
                    </div>

                    <article className="bg-greenery-500/10 rounded-3xl overflow-hidden shadow-xl border border-greenery-500/20">
                        {/* TALAZ Image Gallery */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsGalleryPaused(true)}
                            onMouseLeave={() => setIsGalleryPaused(false)}
                            onFocusCapture={() => setIsGalleryPaused(true)}
                            onBlurCapture={(event) => {
                                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                                    setIsGalleryPaused(false);
                                }
                            }}
                        >
                            <ProjectImage
                                key={activeImage}
                                src={talazImages[activeImage].src}
                                alt={talazImages[activeImage].label}
                                className="w-full h-56 sm:h-80 md:h-[420px]"
                            />

                            {/* Gallery Controls */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 pointer-events-none">
                                <button
                                    type="button"
                                    onClick={previousImage}
                                    aria-label="Previous photo"
                                    className="pointer-events-auto bg-greenery-900/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                >
                                    &#8592;
                                </button>

                                <button
                                    type="button"
                                    onClick={nextImage}
                                    aria-label="Next photo"
                                    className="pointer-events-auto bg-greenery-900/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                >
                                    &#8594;
                                </button>
                            </div>

                            {/* Image Caption */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                                <p className="text-sm md:text-base font-semibold text-white">
                                    {talazImages[activeImage].label}
                                </p>

                                <p className="text-xs md:text-sm text-white/80">
                                    {talazImages[activeImage].caption}
                                </p>
                            </div>
                        </div>

                        {/* Gallery Indicators */}
                        <div className="flex items-center justify-center gap-3 py-4">
                            {talazImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setActiveImage(index)}
                                    aria-label={`View photo ${index + 1}`}
                                    aria-pressed={index === activeImage}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        index === activeImage
                                            ? "bg-greenery-900 w-8"
                                            : "bg-greenery-500 w-2.5 hover:bg-greenery-700"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* TALAZ Details */}
                        <div className="p-6 md:p-9">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                                <div>
                                    <h3 className="font-fira text-xl md:text-2xl font-semibold text-start">
                                        TALAZ USV
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-2 text-start">
                                        AI-Enabled Autonomous Marine Robotics
                                    </p>
                                </div>

                                <span className="text-sm text-gray-600">
                                    2023 - 2025
                                </span>
                            </div>

                            <p className="about-p text-start leading-relaxed mb-5">
                                Initiated and contributed to the development of a
                                BAP-funded (Scientific Research Project) hybrid
                                unmanned surface vehicle platform integrating
                                AI-based visual perception, autonomous navigation,
                                sensor systems and communication technologies.
                                The project combines YOLO-based object detection,
                                custom dataset development, camera-LiDAR
                                perception and real-world field testing.
                            </p>

                            <p className="about-p text-start leading-relaxed mb-7">
                                Founded and led the PRU-İDA team, coordinating
                                interdisciplinary development. The team represented
                                Piri Reis University at Njord Challenge 2025
                                and TEKNOFEST 2025,{" "}
                                <strong className="font-bold text-gray-800">
                                    and continues its activities through RoboBoat 2026
                                    and future competitions.
                                </strong>
                            </p>

                            <div className="flex flex-wrap justify-start gap-2 mb-8">
                                {[
                                    "YOLOv8",
                                    "Deep Learning",
                                    "Computer Vision",
                                    "Camera-LiDAR",
                                    "Autonomous Navigation",
                                    "Python",
                                    "MAVLink",
                                    "RFD900",
                                    "BAP Project"
                                ].map((tag) => (
                                    <TechTag key={tag} label={tag} />
                                ))}

                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://doi.org/10.1109/ELECO69582.2025.11329363"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-greenery-500 text-greenery-900 font-semibold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    View Publication ↗
                                </a>

                                <a
                                    href="https://github.com/PRU-Robotics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-greenery-500 text-sm font-semibold hover:bg-greenery-500/20 transition-all duration-300"
                                >
                                    PRU-Robotics GitHub ↗
                                </a>
                            </div>
                        </div>
                    </article>
                </section>

                {/* AI & SOFTWARE PROJECTS */}
                <section className="mb-20 md:mb-24">
                    <div className="mb-10">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold text-start">
                            AI & Technical Projects
                        </h2>

                        <p className="about-p text-start mt-3">
                            Selected studies in machine learning, image processing
                            and software engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="
                                    bg-greenery-500/10
                                    border border-greenery-500/30
                                    rounded-3xl overflow-hidden
                                    shadow-md
                                    transition-all duration-300
                                    hover:shadow-2xl
                                    hover:-translate-y-2
                                    flex flex-col
                                "
                            >
                                {/* Project Image */}
                                {project.image && (
                                    <ProjectImage
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 md:h-52"
                                    />
                                )}

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start gap-4 mb-4">
                                        <p className="text-xs text-gray-600 text-start">
                                            {project.category}
                                        </p>

                                        <span className="text-xs text-gray-600">
                                            {project.year}
                                        </span>
                                    </div>

                                    <h3 className="font-fira text-lg md:text-xl font-semibold text-start mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="about-p text-start leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap justify-start gap-2 mb-7">
                                        {project.technologies.map((tag) => (
                                            <TechTag key={tag} label={tag} />
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="mt-auto flex flex-wrap gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-semibold border border-greenery-500 rounded-full px-4 py-2 hover:bg-greenery-500/30 transition-all duration-300"
                                            >
                                                GitHub ↗
                                            </a>
                                        )}

                                        {project.publication && (
                                            <a
                                                href={project.publication}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-semibold bg-greenery-500 rounded-full px-4 py-2 hover:shadow-lg transition-all duration-300"
                                            >
                                                Publication ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* More Projects on GitHub */}
                    <div className="flex justify-center mt-12">
                        <a
                            href="https://github.com/semanurbilada?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center justify-center
                                px-7 py-3
                                rounded-full
                                border border-greenery-500
                                text-sm font-semibold
                                bg-greenery-500/10
                                transition-all duration-300
                                hover:bg-greenery-500/30
                                hover:shadow-xl
                                hover:-translate-y-1
                            "
                        >
                            Explore More Projects on GitHub ↗
                        </a>
                    </div>
                </section>

                {/* SELECTED PUBLICATIONS */}
                <section className="mb-12">
                    <div className="border-t border-gray-700/30 pt-12 md:pt-16">
                        <h2 className="font-fira text-xl md:text-2xl font-semibold text-center mb-5">
                            <span className="bg-greenery-default italic px-2">
                                Selected Publications
                            </span>
                        </h2>

                        <p className="about-p max-w-3xl mx-auto text-center mb-10">
                            Peer-reviewed research presented at IEEE conferences,
                            covering computer vision and hybrid robotic systems.
                        </p>

                        <div className="flex flex-col gap-5">
                            {publications.map((publication) => (
                                <article
                                    key={publication.doi}
                                    className="
                                        bg-greenery-500/10
                                        border border-greenery-500/30
                                        rounded-2xl
                                        p-6 md:p-7
                                        shadow-sm
                                        transition-all duration-300
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                    "
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                                        <div className="flex-1">
                                            <span className="text-xs text-gray-600">
                                                {publication.year}
                                            </span>

                                            <h3 className="font-semibold text-base md:text-lg mt-2 text-start">
                                                {publication.title}
                                            </h3>

                                            <p className="about-p text-start mt-3">
                                                {publication.venue}
                                            </p>
                                        </div>

                                        <a
                                            href={publication.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                shrink-0
                                                inline-flex items-center justify-center
                                                bg-greenery-500
                                                rounded-full
                                                px-5 py-3
                                                text-sm font-semibold
                                                hover:scale-105
                                                hover:shadow-lg
                                                transition-all duration-300
                                            "
                                        >
                                            View DOI ↗
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Academic Profile */}
                        <div className="text-center mt-10">
                            <a
                                href="https://scholar.google.com/citations?hl=tr&user=jelLK84AAAAJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center text-sm font-semibold border border-greenery-500 rounded-full px-6 py-3 hover:bg-greenery-500/30 hover:shadow-lg transition-all duration-300"
                            >
                                View Google Scholar Profile ↗
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}