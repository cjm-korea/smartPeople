import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/bookQuestion.json'

export default function Animation() {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            speed="0.8"
            play
        />
    )
}