import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const imgV = {
    hidden: { opacity: 0, x: "-100px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7 } }
}

const SecBoxImg = ({ img }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    const BoxImg = styled(motion.div)`
    background-image:url(${img});
    background-repeat:no-repeat;
    background-position:right;
    background-size:cover;
    width: 50%;
    height:100%;
    `
    return (
        <>
            <BoxImg/>
        </>
    )
}

export default SecBoxImg
