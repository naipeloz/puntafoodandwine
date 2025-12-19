"use client";

import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Function to handle load completion
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Minimum visibility of 1s plus fade out
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        // Fallback safety timeout
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    // If finished loading (and fade out done), remove from DOM or just hide
    // We'll use pointer-events-none and opacity-0 for smooth transition

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-hidden={!isLoading}
        >
            <div className="flex flex-col items-center">
                {/* Logo - Using vertical white if available or inverted horizontal */}
                <img
                    src="/assets/logos_pfw/vertical-white.png" // Assuming this exists from previous file listing
                    alt="Punta Food & Wine Loader"
                    className="w-32 md:w-48 animate-pulse"
                />

                {/* Optional Spinner or Text */}
                {/* <div className="mt-8 w-16 h-1 bg-white/20 overflow-hidden rounded-full">
                    <div className="w-full h-full bg-white animate-loading-bar origin-left"></div>
                </div> */}
            </div>
        </div>
    );
}
