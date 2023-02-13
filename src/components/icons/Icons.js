export default function Icons({ iconName, className }) {
    const arrowIcon = (
        <svg 
            className={className} 
            fill="#d1fae5" 
            width="28" height="28" 
            viewBox="0 0 32 32" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4.686l-11.314 11.314 11.314 11.314 11.314-11.314-11.314-11.314zM10.343 16l5.657-5.657 5.657 5.657-5.657 5.657-5.657-5.657z"></path>
        </svg>
    );

    return (
        <>
            {iconName === "menu" && arrowIcon}
        </>
    );

}