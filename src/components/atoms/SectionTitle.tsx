import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size:60px;
    font-family: 'Playfair Display',serif;
    letter-spacing:8px;
`
const Span = styled.span`
    font-size:60px;
    font-family: 'Playfair Display',serif;
    color:#6ADFDC;
    margin-right: 8px;
`
const TitleContainer = styled(motion.div)`
    display:flex;
    margin-bottom: 50px;
`


const SectionTitle = ({ title, Blue }) => {
    return (
        <>
            <TitleContainer>
                <Span>{Blue}</Span>
                <Title>{title}</Title>
            </TitleContainer>
        </>
    )
}

export default SectionTitle
