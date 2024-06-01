import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className='h-full w-full '>
            <div className='flex items-start justify-between px-4 py-14'>
                <div>
                    <h3>ABOUT US</h3>
                </div>
                <div className='w-[50%]'>
                    <p className='text-[56px] leading-[60px]' data-aos="fade-up">YOUR CREATIVE ALLY IN </p>
                    <p className='text-[56px] leading-[60px]' data-aos="fade-up">

                        THE MIDWEST, FORGING
                    </p>
                    <p className='text-[56px] leading-[60px]' data-aos="fade-up">

                        UNFORGETTABLE AND
                    </p>
                    <p className='text-[56px] leading-[60px]' data-aos="fade-up">

                        IMPACTFUL NARRATIVES
                    </p>
                    <p className='text-[56px] leading-[60px]' data-aos="fade-up">

                        WITH EVERY SHOT
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About