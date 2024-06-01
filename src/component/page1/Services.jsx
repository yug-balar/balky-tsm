import { motion } from 'framer-motion'
import React from 'react'

function Services() {

    return (
        <div className='w-full h-screen flex justify-center items-center  bg-[#1D1D1B]'>
            <div className='text  flex gap-10 overflow-hidden whitespace-nowrap' >
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-white'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-yellow-500' > SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-white'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-yellow-400'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-white'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-yellow-400'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-white'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-yellow-400'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-white'> SERVICES </motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 2 }} className='text-[8vw] leading-none uppercase pt-10 font-semibold text-yellow-400'> SERVICES </motion.h1>
            </div>
        </div>
    )
}

export default Services