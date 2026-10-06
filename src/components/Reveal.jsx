import { useEffect, useRef, useState } from 'react';

function Reveal({ children }) {
    const [visible, setVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`reveal ${visible ? 'reveal-visible' : ''}`}
        >
            {children}
        </div>
    );
}

export default Reveal;