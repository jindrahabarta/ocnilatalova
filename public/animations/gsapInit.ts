import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const gsapInit = (path: string) => {
    ScrollTrigger.killAll()
    gsap.registerPlugin(ScrollTrigger)

    //Global Animations

    const navScrollTl = gsap
        .timeline({
            paused: true,
            defaults: { duration: 0.2, ease: 'power1.out' },
        })
        .to('#navigation', {
            opacity: 0,
            translateY: '-50%',
            duration: 0.2,
            pointerEvents: 'none',
        })

    ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (self.direction === 1) {
                navScrollTl.play()
            } else if (self.direction === -1) {
                navScrollTl.reverse()
            }
        },
    })

    //HERO
    if (path === '/' || path === '/ocni-ordinace' || path === '/ocni-optika') {
        //HERO animation init
        gsap.to('.heroPart', {
            opacity: 1,
            translateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out',
        })
    }

    if (path === '/ocni-ordinace') {
        //OCNI ORDINACE

        gsap.to('.aboutUsPart', {
            opacity: 1,
            translateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out',
        })

        gsap.to('.servicesPart', {
            scrollTrigger: {
                trigger: '#services',
                start: 'top center',
                end: 'bottom center',
            },
            opacity: 1,
            translateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out',
        })
    }
}

export default gsapInit
