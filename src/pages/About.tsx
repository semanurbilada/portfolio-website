import React from "react";
import ComingSoon from "../components/ComingSoon.tsx";

const About: React.FC = () => {
    return(
        <div className="page-default flex items-center justify-center">
            <ComingSoon />
            {/* 
                - about me infos
                - button for personal resume
            */}
        </div>
    );    
}

export default About;