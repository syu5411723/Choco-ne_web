import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

import Sec05Thumb from '../../../atoms/main/sec05/Sec05Thumb'
import Sec05Title from '../../../atoms/main/sec05/Sec05Title'

import Sec05Cnt from '../../../atoms/main/sec05/Sec05Cnt'
import Secc05Button from '../../../atoms/main/sec05/Secc05Button'
import Sec05Img from '../../../atoms/main/sec05/Sec05Img'
import { useInView } from 'react-intersection-observer'

const Sec05ContentWrapper = styled(motion.div)`
    margin-top: 200px;
    position: absolute;
    z-index: 10;
`
const Sec05ImgWrapper = styled(motion.div)`
    margin-top: 200px;
    position: absolute;
    right:0;
    z-index: 1;
`

const contentV = {
    hidden: { opacity: 0, x: "-100px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7, } }
}
const imgWrapperV = {
    hidden: { opacity: 0, x: "100px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7, delay: 0.5 } }
}

const Sec05Sub = ({ text01, text02, titleImg, subTitle, cntText, top, img }) => {
    const [ref, inView] = useInView({
        rootMargin: "-150px 0px",
        triggerOnce: true,
    });
    return (
        <>
            <Sec05ContentWrapper style={{ top: `${top}` }}
                ref={ref} inView={inView}
                variants={contentV}
                animate={inView ? "visible": "hidden"}
            >
                <Sec05Thumb text01={text01} text02={text02} />
                <Sec05Title titleImg={titleImg} subTitle={subTitle} />
                <Sec05Cnt cntText={cntText} />
                <Secc05Button />
            </Sec05ContentWrapper>
            <Sec05ImgWrapper style={{ top: `${top}` }}
                variants={imgWrapperV}
                animate={inView ? "visible" : "hidden"}
            >
                <Sec05Img img={img}/>
            </Sec05ImgWrapper>
        </>
    )
}

export default Sec05Sub
