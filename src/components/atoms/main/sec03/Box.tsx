import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const BoxContainer = styled.div`
    width:250px;
`
const ImgWrapper = styled(motion.div)`
    width:250px;
    height:250px;
`
const BoxImg = styled(motion.img)`
    width:100%;
`
const BoxCnt = styled(motion.div)`

`

const BoxTitle = styled.h3`
    font-size: 16px;
    font-weight:700;
    line-height:2;
    margin: 15px 0;
`
const BoxText = styled.p`
    font-size: 16px;
    line-height:2;
`

const Box = ({ img, title, text, delay }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    });
    const [ref02, inView02] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    });

    const imgV = {
        hidden: { opacity: 0, y: "100px" },
        visible: { opacity: 1, y: "0px", transition: { duration: 0.7, delay: `${delay}` } },
    }
    
    return (
        <>
            <BoxContainer>
                <ImgWrapper>
                    <BoxImg src={img}
                        ref={ref} inView={inView}
                        variants={imgV}
                        animate={inView ? "visible" : "hidden"}
                    />
                </ImgWrapper>
                <BoxCnt>
                    <BoxTitle>{title}</BoxTitle>
                    <BoxText>{text}</BoxText>
                </BoxCnt>
            </BoxContainer>
        </>
    )
}

export default Box
