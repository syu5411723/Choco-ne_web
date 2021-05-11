import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import Sec03Title from "./main/sec03/Sec03Title"

const Span = styled.span`
    font-size:60px;
    font-family: 'Playfair Display',serif;
    color:#6ADFDC;
    margin-right: 6px;
`
const TitleContainer = styled(motion.div)`
    display:flex;
    margin-bottom: 50px;
    justify-content:center;
`


const SectionTitle = ({ span, text01, text02, text03 }) => {
    return (
        <>
            <TitleContainer>
                <Span>{span}</Span>
                <Sec03Title title={text01} delay={0.075} />
                <Sec03Title title={text02} delay={0.15} />
                <Sec03Title title={text03} delay={0.225} />
            </TitleContainer>
        </>
    )
}

export default SectionTitle
