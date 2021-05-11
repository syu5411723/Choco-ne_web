import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const BoxCnt = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const BoxCnt01Wrapper = styled(motion.div)`
    display:flex;
    justify-content:space-around;
    width: 120px;
    margin: 0 auto;
`
const BoxCnt01 = styled(motion.h2)`
    font-family:"æ¸¸ã‚´ã‚·ãƒƒã‚¯ä½“",YuGothic,"æ¸¸ã‚´ã‚·ãƒƒã‚¯","Yu Gothic","ãƒ¡ã‚¤ãƒªã‚ª","Hiragino Kaku Gothic ProN","Hiragino Sans",sans-serif;
    font-size: 26px;
    font-weight:700;
    letter-spacing:.22em;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
`
const BoxCnt02 = styled(motion.p)`
    font-size: 16px;
    width:380px;
    margin:0 auto;
    text-align:left;    
    line-height:35px;
`

const cnt01V = {
    hidden: { opacity: 0, y: "100px" },
    visible: { opacity: 1, y: "0px", transition: { duration: 0.7, delay: 0.2 } },
}
const cnt02V = {
    hidden: { opacity: 0, x: "100px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7 } },
}

const SecBoxcnt = ({ cnt01, cnt02, cnt03, cnt04, transitionX }) => {
    const cnt02V = {
        hidden:{opacity:0, x:`${transitionX}`},
        visible:{opacity:1, x:"0px", transition: { duration: 0.7,}},
    }
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    const [ref02, inView02] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <BoxCnt01Wrapper
                ref={ref} inView={inView}
                variants={cnt01V}
                animate={inView ? "visible" : "hidden"}
            >
                <BoxCnt01>{cnt01}</BoxCnt01>
                <BoxCnt01>{cnt02}</BoxCnt01>
                <BoxCnt01>{cnt03}</BoxCnt01>
            </BoxCnt01Wrapper>
            <BoxCnt02
                ref={ref02} inView02={inView02}
                variants={cnt02V}
                animate={inView02 ?  "visible" : "hidden"}
            >{cnt04}</BoxCnt02>
        </>
    )
}

export default SecBoxcnt
