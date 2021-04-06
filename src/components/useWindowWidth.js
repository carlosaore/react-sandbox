import { useState, useEffect } from "react";

const useWindowsWidth = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    let checkScreenSize = () => {
        setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return screenWidth;
};

export default useWindowsWidth;