import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import BrownBg from "../../../images/ico-blank-brown.svg"


const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    width:80%;
    margin: 0 auto;
`

const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    
    margin-top: 30px;
    &:hover div {
        width:135px;
    }
`

const Text = styled(motion.p)`
    text-decoration:none;
    color: #583c27;
    font-size:16px;
    font-weight: 800;
    font-family: 'Playfair Display',serif;
`
const Line = styled.div`
    width:0;
    height:1px ;
    background-color: #583c27;
    transition: all 0.5s ease-out;
`
const ButtonImg = styled.h1`
    background:url(${BrownBg})no-repeat center;
    background-size:cover;
    width:32px;
    height:32px;
    margin-top:21px;
    margin-left: 5px;
`

const FooterFromShop = () => {
    return (
        <>
            <Container>
            <TextWrapper >
                <Text>ONLINE SHOP</Text>
                <Line />
            </TextWrapper>
            <ButtonImg />
            </Container>
        </>
    )
}

export default FooterFromShop
