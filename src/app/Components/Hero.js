import React from "react";
import Image from 'next/image'

const Hero = () => {
    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src="/photos/tands.jpeg" alt="NFT of the pugs" width={600} height={500}
                       className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Stella and TsuNami!</h1>
                    <p className="py-6">Two pug sisters, Stella and TsuNami, share an unbreakable bond of love and
                        companionship. They spend their days frolicking together, their playful antics bringing joy
                        to everyone around them. Whether it's snuggling up for naptime or going on adventurous walks,
                        Stella and TsuNami are inseparable, showcasing the purest form of sisterly affection.</p>
                    <button className="btn btn-primary">Find Us on OpenSea</button>
                </div>
            </div>
        </div>
    )
}

export default Hero