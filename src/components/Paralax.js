import { useState, useEffect } from "react";
import "./Paralax.css";

const useParalaxBanner = 
setScrollPosition => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);

    useEffect(() => {
        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return ( ) =>
        window.removeEventListener(
            "scroll", handleScroll);
    }, []);
}

export const Paralax = ( ) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useParalaxBanner(setScrollPosition);

    return (
        <>
        <section
        style={{
            backgroundSize:
            `${
                (window.outerHeight - scrollPosition) /3
            }%`,
        }}
        className="banner"
        >
            <h2>Parallax</h2>
            <button>Get Started</button>
        </section>
       
        </>
    );
};