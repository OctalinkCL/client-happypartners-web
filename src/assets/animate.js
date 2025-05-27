import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin)

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