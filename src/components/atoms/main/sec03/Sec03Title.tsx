import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Title = styled(motion.h1)`
    font-size:60px;
    font-family: 'Playfair Display',serif;
    letter-spacing:6px;
`



const Sec03Title = ({ title, delay }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    });
    const titleV = {
        hidden: { opacity: 0, x: 10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: `${delay}` } }
    }
    return (
        
        <>
                <Title ref={ref} inView={inView}
                    variants={titleV}
                    animate={inView ? "visible" : "hidden"}
                >{title}</Title>
        </>
    )
}

export default Sec03Title
