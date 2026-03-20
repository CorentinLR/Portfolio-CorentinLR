import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.substring(1); // remove '#'
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50); // Small delay to let the page render first if coming from another route
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
