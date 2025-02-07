import { useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export const useIsVisible = (
    options?: IntersectionObserverOptions,
    once = false,
) => {
    const optionsRef = useRef(options);
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef<HTMLDivElement | null>(null);  // Ensure it's HTMLElement

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        observer.unobserve(entry.target);
                        observer.disconnect();
                    }
                } else {
                    setIsVisible(false);
                }
            })}, optionsRef.current);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
            observer.disconnect();
        };
    }, [once]);

    return { isVisible, targetRef };
};
