import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const Text = styled.p`
    font-size: 8px;
`
const Container = styled(motion.div)`
    margin-top: 80px;
    text-align:center;
    font-family: 'Playfair Display',serif;
    font-weight:700;
`

const FooterInc = () => {
    return (
        <>
            <Container>
                <Text>© 2021 k2communication inc.</Text>
            </Container>
        </>
    )
}

export default FooterInc
