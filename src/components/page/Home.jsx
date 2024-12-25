import React from 'react'
import { SpotlightPreview } from '../HeroSection'
import { HeroHighlightDemo } from '../HeroSection2'
import { WavyBackgroundDemo } from '../NavbarOutro'
import { TextRevealCardPreview } from '../TextRevealCard'
import { GoogleGeminiEffectDemo } from '../GoogleGeminiEffect'
import { SparklesPreview } from '../Sparkles'
import TailwindFooter from '../Fotter'
// import { LampDemo } from '../Lamp'
import { BackgroundBeamsWithCollisionDemo } from '../BackGroundBeams'
import { BackgroundGradientDemo } from '../BackGroundGradient'
import { HeroParallaxDemo } from '../HeroParadox'
import { CardHoverEffectDemo } from '../CardHoverEffect'
import { MultiStepLoaderDemo } from '../MultiStepLoader'

function Home() {
    return (
        <div className='bg-black'>
            <HeroParallaxDemo />
            <GoogleGeminiEffectDemo />
            <SparklesPreview />
            <CardHoverEffectDemo />
            <MultiStepLoaderDemo />
            {/* <HeroHighlightDemo /> */}
            {/* <BackgroundBeamsWithCollisionDemo /> */}
            {/* <TextRevealCardPreview /> */}
            {/* <BackgroundGradientDemo /> */}
             {/* <LampDemo /> */}
            {/* <WavyBackgroundDemo /> */}
        </div>
    )
}

export default Home
