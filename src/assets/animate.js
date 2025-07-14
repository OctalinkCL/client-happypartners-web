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

// About somos.astro
export function aboutIntroImage(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    gsap.from(element, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: element,
            start: "bottom 90%",
        },
    });
}

export function animateSvgUnderlineOnce(selectorsWithDelays = []) {
    
    selectorsWithDelays.forEach(({ selector, delay = 0 }) => {
      const path = document.querySelector(`${selector} path`);
      if (!path) return;
  
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
  
      gsap.fromTo(
        path,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path.closest("h2"),
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }