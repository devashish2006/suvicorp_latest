import React from 'react'
import { SpotlightPreview } from '../HeroSection'
import { HeroHighlightDemo } from '../HeroSection2'
import { WavyBackgroundDemo } from '../NavbarOutro'
import { TextRevealCardPreview } from '../TextRevealCard'
import { GoogleGeminiEffectDemo } from '../GoogleGeminiEffect'
import { SparklesPreview } from '../Sparkles'
import TailwindFooter from '../Fotter'
import { LampDemo } from '../Lamp'

function Home() {
    return (
        <div className='bg-black'>
            <GoogleGeminiEffectDemo />
            <SparklesPreview />
             {/* <LampDemo /> */}
             <HeroHighlightDemo />
            <TextRevealCardPreview />
            {/* <WavyBackgroundDemo /> */}
        </div>
    )
}

export default Home
