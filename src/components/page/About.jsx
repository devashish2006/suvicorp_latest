import React from 'react'
import { AnimatedTestimonialsDemo } from '../AnimatedTestimonials'
import { SpotlightPreview } from '../SpotlightComponent'
import { StickyScrollRevealDemo } from '../StickyScrollReveal'
import { InfiniteMovingCardsDemo } from '../InfiniteMovingCard'

function About() {
    return (
        <div className='bg-black'>
            <SpotlightPreview />
            <InfiniteMovingCardsDemo />
            <StickyScrollRevealDemo />
            <AnimatedTestimonialsDemo />
        </div>
        
    )
}

export default About
