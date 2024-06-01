import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Callus() {
    return (
        <div className='h-screen w-full bg-black'>
            <div className='h-full w-full'>
                <div className=' h-full w-full pt-[6%] pl-[2%] flex gap-[25%]'>
                    <div>

                        <h1 className='text-white'>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </h1>
                    </div>
                    <div>
                        <h3 className='text-white'>GET IN TOUCH</h3>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Callus