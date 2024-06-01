import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Crafting() {

    useEffect(() => {
        Aos.init()
    })
    return (
        <div className='h-screen w-full flex'>
            <div className='textstructure mt-[250px] px-5'>
                {["CRAFTING STAND", "OUT VISUAL FOR THE", 'DIGITAL ERA'].map((item, index) => {
                    return (

                        <div className='masker gap-3' key={index}>
                            <div className='w-fit flex items-end overflow-hidden   '>
                                {
                                    index === 2 && (
                                        <div className='mr-4 w-[10vw] rounded-md h-[7vw]  relative object-cover flex justify-center items-center '>
                                            <img className='h-full w-full object-cover rounded-md' src="/images/about.jpg" data-aos="flip-up" data-aos-duration="1000" alt="" />
                                        </div>
                                    )
                                }
                                <h1 className='uppercase text-8xl leading-none tracking-tighter text-[#20201E]' data-aos="fade-up" data-aos-duration="1000">{item}</h1>

                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Crafting