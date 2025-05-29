import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin)

export function activateOnScroll(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (!element) return;

    function handleScroll() {
        if (window.scrollY > offset) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al cargar
}

export function animateFromX(selector, options = {}) {
    const el = document.querySelector(selector);
    if (el) {
        gsap.from(el, {
            opacity: 0,
            x: -60,
            duration: 0.5,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
            },
            ...options,
        });
    }
}

export function scrambleText(selector) {
    const element = document.querySelector(selector);

    gsap.to(element, {
        duration: 3,
        scrambleText: "¿Puedes identificar cómo se siente trabajar en tu organización... y cómo te gustaría que se sintiera?"
    });
}


export function heroSplitText(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    document.fonts.ready.then(() => {
        gsap.set(element, { opacity: 1 });

        const split = SplitText.create(element, { type: "words", aria: "hidden" });

        gsap.from(split.words, {
            opacity: 0,
            duration: 0.3,
            ease: "sine.out",
            stagger: 0.1,
        });
    });
}

