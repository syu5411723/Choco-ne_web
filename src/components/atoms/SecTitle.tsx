import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

import Sec04Title from './main/Sec04/Sec04Title'


const Span = styled.span`
    font-size:100px;
    font-family: 'Playfair Display',serif;
    color:#6ADFDC;
    margin-right: 6px;
`
const TitleContainer = styled(motion.div)`
    display:flex;
    margin-bottom: 50px;
    width:90%;
    margin: 0 auto;
`
const SecTitle = ({ span, text01, text02, text03, text04, text05 }) => {
    return (
        <>
            <TitleContainer>
                <Span>{span}</Span>
                <Sec04Title title={text01} delay={0.075} />
                <Sec04Title title={text02} delay={0.15} />
                <Sec04Title title={text03} delay={0.225} />
                <Sec04Title title={text04} delay={0.3} />
                <Sec04Title title={text05} delay={0.375} />
            </TitleContainer>
        </>
    )
}

export default SecTitle
