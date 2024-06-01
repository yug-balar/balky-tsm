import React from 'react'

function Vessels() {
    return (
        <div className='h-full w-full flex justify-end' >
            <div className='h-[90%] w-[65%] flex justify-end flex-col'>
                <img className='h-full w-full object-cover' src="/images/about3.jpg" alt="" />
                <div className='h-full w-full mt-2 flex justify-between '>
                    <div>
                        <h6 className='text-[10px]'>⦿ TOPSHARE MEDIA</h6>
                    </div>
                    <div>
                        <h6 className='text-[10px]'>ZACH VESSELS</h6>
                    </div>
                    <div>
                        <h6 className='text-[10px]'>2024</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vessels