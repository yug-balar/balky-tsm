import React, { useEffect, useState } from 'react'

function Navbar() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className='flex h-[50px] w-full '>
            <div className='h-full w-full flex items-center justify-between px-4 text-sm/[17px]'>
                <div>
                    <h3>NS/M'</h3>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <h2>[0] worls [30]</h2>
                    </div>
                    <div>
                        <h2 className="font-['neu']">[•] ABOUT</h2>
                    </div>
                </div>
                <div>
                    <h2>VIDEO-PRODUCTION COMPANY <br /> <span>
                        {dateState.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })}
                    </span> , MIDWEST</h2>
                </div>
                <div>
                    <h3>[ ] GET A QUEST</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar