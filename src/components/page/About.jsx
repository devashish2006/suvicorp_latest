import React from 'react'
// import { TextGenerateEffectDemo } from '../TextGenerateEffect'
import { AnimatedTestimonialsDemo } from '../AnimatedTestimonials'
import { SpotlightPreview } from '../HeroSection'
import { StickyScrollRevealDemo } from '../StickyScrollReveal'
import { InfiniteMovingCardsDemo } from '../InfiniteMovingCard'
// import { MultiStepLoaderDemo } from '../MultiStepLoader'

function About() {
    return (
        <div className='bg-black'>
            <SpotlightPreview />
            {/* <MultiStepLoaderDemo /> */}
            <InfiniteMovingCardsDemo />
            <StickyScrollRevealDemo />
            {/* <TextGenerateEffectDemo /> */}
            <AnimatedTestimonialsDemo />
        </div>
        
    )
}

export default About
