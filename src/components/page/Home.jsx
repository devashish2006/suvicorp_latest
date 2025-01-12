import React from 'react'
import { GoogleGeminiEffectDemo } from '../GoogleGeminiEffect'
import { HeroParallaxDemo } from '../HeroParadox'
import { CardHoverEffectDemo } from '../CardHoverEffect'
import { MultiStepLoaderDemo } from '../MultiStepLoader'

function Home() {
    return (
        <div className='bg-black'>
            <HeroParallaxDemo />
            <GoogleGeminiEffectDemo />
            <CardHoverEffectDemo />
            <MultiStepLoaderDemo />
        </div>
    )
}

export default Home
