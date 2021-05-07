import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Title = styled(motion.h2)`
    font-family:"æ¸¸ã‚´ã‚·ãƒƒã‚¯ä½“",YuGothic,"æ¸¸ã‚´ã‚·ãƒƒã‚¯","Yu Gothic","ãƒ¡ã‚¤ãƒªã‚ª","Hiragino Kaku Gothic ProN","Hiragino Sans",sans-serif;
    font-size: 32px;
    font-weight:700;
    letter-spacing:.66rem;
    line-height:1.7;
    display:flex;
    justify-content:space-between;
    width: 80px;
`
const Text = styled.span`
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
`
const titleV = {
    hidden:{opacity:0},
    visible:{opacity:1, transition:{duration:0.7}}
}

const SubTitle= ({title, title02}) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce:true,
    });
    return (
        <>
            <Title ref={ref} inView={inView}
                variants={titleV}
                animate={inView ? "visible" : "hidden"}
            >
                <Text>{title}</Text>
                <Text>{title02}</Text>
            </Title>
        </>
    )
}

export default SubTitle
