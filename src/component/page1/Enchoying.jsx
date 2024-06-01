import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Enchoying() {
    return (
        <div className='h-full w-full'>
            <div className='h-full w-full flex items-center justify-between'>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <h1 className='text-[40px] text-center'>ENCHOYING YOUR VOICE</h1>
                </div>
                <div className='h-full w-[33%] object-contain'>
                    <img className='h-full w-full object-cover' src="/images/about4.jpg" alt="" />
                </div>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <h1 className='text-[40px] text-center'>AMPLIFLYING YOUR MESSAGE</h1>
                </div>
            </div>
            <div className='pt-[60px] w-full flex items-center text-center justify-center'>
                <button> <FontAwesomeIcon icon={faCaretRight} />  BOOK A SESSION</button>
            </div>
        </div>
    )
}

export default Enchoying