import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import bubbleImg from "../../../../images/lineup_shape-w-1.svg"

const BubbleImg = styled(motion.div)`
    background:url(${bubbleImg}) no-repeat;
    width:650px;
    height:630px;
    position:relative;
`
const ChocoImg = styled(motion.img)`
    width:400px;
    position:absolute;
    top:30%;
    right:60px;
`

const chocoImgV = {
    hidden:{opacity:0, scale:0.2},
    visible:{opacity:1, scale:1, transition:{type: "spring", stiffness: 200, delay:0.9}}
}
const Sec05Img = ({img}) => {
    const [ref, inView] = useInView({
        rootMargin: "100px",
        triggerOnce:true,
    })
    return (
        <>
            <BubbleImg>
                <ChocoImg src={img} ref={ref} inView={inView}
                    variants={chocoImgV}
                    animate={inView ? "visible" : "hidden"}
                />
            </BubbleImg>
        </>
    )
}

export default Sec05Img
