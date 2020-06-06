import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";

const Title = ({ lineContent, lineContent2 }) => {
    let line1 = useRef(null);
    let line2 = useRef(null)

    useEffect(() => {
        gsap.from([line1, line2], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            y: 64,
            stagger: {
                amount: 0.15
            }
        })
    })

    return (
        <h1 className='page-title'>
            <div className="line-wrap">
                <div className="line" ref={el => (line1 = el)}>
                    {lineContent}
                </div>
            </div>
            <div className="line-wrap">
                <div className="line" ref={el => (line2 = el)}>
                    {lineContent2}
                </div>
            </div>
        </h1>
    )
}

export default Title
