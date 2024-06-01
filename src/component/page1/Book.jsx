import React from 'react'
import { faAngleRight, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Book() {
    return (
        <div className='h-full w-full flex justify-end relative right-[15%] pt-14'>
            <div className='h-full w-[35%] text-[20px] font-[600] flex flex-col gap-5 '>
                <div>
                    <p className='-tracking-[.04em]'>Meet Zach Vessels, the creative force behind
                        TopSphere Media, your go-to destination for
                        captivating video production that leaves a lasting
                        impression.</p>
                </div>
                <div className='-tracking-[.04em]'>
                    <p>We specialize in crafting videos that not only
                        engage but also deeply resonate. Whether it's a
                        brand narrative, commercial, or social piece, we
                        assemble the perfect team to bring your vision to
                        life.</p>
                </div>
                <div className='-tracking-[.04em]'>
                    <p>Zach isn’t all work no play– he's a music addict, a
                        devoted husband to Madie, and proud owner of
                        Sally, our basset hound who keeps the office
                        lively. With a personal touch and unwavering
                        dedication, Zach and his team accompany
                        clients every step of the way, ensuring each idea
                        exceeds expectations.</p>
                </div>
                <div className='-tracking-[.04em]'>
                    <p>At TopSphere Media, we're not just making
                        videos – we're crafting experiences that make an
                        impact. Reach out to us today, and let's discuss
                        how we can bring your story to life.</p>
                </div>
                <div className='text-[15px]'>
                    <button><FontAwesomeIcon icon={faCaretRight} />  BOOK A SEASON</button>
                </div>
            </div>
        </div>
    )
}

export default Book