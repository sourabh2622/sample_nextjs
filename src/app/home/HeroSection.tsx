import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div>
            <div className="container w-full flex flex-1 justify-center">

                <Image

                    alt="NextUI hero Image"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={1000} height={600}
                />
            </div>
        </div>
    )
}
