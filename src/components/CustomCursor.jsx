// components/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/CustomCursor.css';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const isDesktop = window.matchMedia('(pointer: fine)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const on = isDesktop && !reduced;
        setEnabled(on);
        document.documentElement.classList.toggle('has-custom-cursor', on);
    }, []);

    useEffect(() => {
        if (!enabled) return;
        const dot = dotRef.current;
        const move = (e) => { dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
        const onEnter = () => dot.classList.add('is-hover');
        const onLeave = () => dot.classList.remove('is-hover');

        window.addEventListener('mousemove', move);
        const interactive = document.querySelectorAll('a, button, .skill-card, .project-card');
        interactive.forEach((el) => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

        return () => {
            window.removeEventListener('mousemove', move);
            interactive.forEach((el) => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
        };
    }, [enabled]);

    if (!enabled) return null;
    return <div ref={dotRef} className="custom-cursor" />;
}