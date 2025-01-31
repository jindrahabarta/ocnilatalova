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
    if (
        path === '/' ||
        path === '/ocni-ordinace' ||
        path === '/ocni-optika' ||
        path === '/zrakovy-terapeut' ||
        path === '/ortoptika'
    ) {
        //HERO animation init
        gsap.to('.heroPart', {
            opacity: 1,
            translateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out',
        })
    }

    //SERVICES
    if (
        path === '/ocni-ordinace' ||
        path === '/zrakovy-terapeut' ||
        path === '/ocni-optika'
    ) {
        const servicesTl = gsap.timeline({
            defaults: { ease: 'power1.inOut' },
            paused: true,
            scrollTrigger: {
                trigger: '#services',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        })

        servicesTl.to('.servicesBg', {
            scale: 1.1,
        })
    }

    //ABOUT
    if (
        path === '/ocni-ordinace' ||
        path === '/zrakovy-terapeut' ||
        path === '/ocni-optika' ||
        path === '/ortoptika'
    ) {
        ScrollTrigger.create({
            trigger: '#o-nas',
            start: 'top center',
            end: 'bottom center',

            onEnter: () => {
                gsap.to('.aboutUsPart', {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: 'power1.out',
                })
            },
        })
    }

    //OPENINGTABLE
    if (
        path === '/ocni-ordinace' ||
        path === '/zrakovy-terapeut' ||
        path === '/ocni-optika' ||
        path === '/ortoptika'
    ) {
        ScrollTrigger.create({
            trigger: '#oteviraci-doba',
            start: 'top center',
            end: 'bottom center',

            onEnter: () => {
                gsap.to('.openingTablePart', {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power1.out',
                })
            },
        })
    }

    //OPENINGTABLE

    if (path === '/ortoptika' || path === '/ocni-optika') {
        ScrollTrigger.create({
            trigger: '.staggerAnimationPart',
            start: 'top center',
            end: 'top center',

            onEnter: () => {
                gsap.to('.staggerAnimationPart', {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power1.out',
                })
            },
        })
    }
}

export default gsapInit
