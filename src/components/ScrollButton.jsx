import { useState, useEffect } from 'react';

export function ScrollButton(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolledToTop = window.scrollY > 100;
            console.log("Scrolled to top:", scrolledToTop);
            if (scrolledToTop ) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    console.log("SCROLL", isVisible);
    return (
        <div className="fixed right-4 bottom-4 z-10 ">
            {isVisible && (
                <button
                className={`scroll-smooth hover:animate-bounce right-2 bottom-2 sm:right-4 sm:bottom-4 z-10  w-12 h-12 sm:w-24 sm:h-24`}
                    onClick={scrollToTop}
                >
                <i class="fa-solid fa-angles-up text-pink-700"/>
                </button>
            )}
        </div>
    );
};

