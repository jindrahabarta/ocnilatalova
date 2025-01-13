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

    //Homepage
    if (path === '/') {
        gsap.to('.heroPart', {
            opacity: 1,
            translateY: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.out',
        })
    }
}

export default gsapInit
