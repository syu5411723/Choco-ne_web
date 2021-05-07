import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

import BrownBg from "../../../images/ico-blank-brown.svg"
import BlueBg from "../../../images/ico-blank-blue.svg"


const ButtonContainer = styled.div`
    background: #6ADFDC;
    width: 250px;
    height: 50px;
    position:absolute;
    right:0;
    cursor: pointer;
    transition:all 0.7s;
    &:hover h3{
        color:#6ADFDC;
        transition:all 0.3s;
    }
    &:hover{
        transition:all 0.3s;
        background: #fff;
    }
    &:hover h1{
        background:url(${BlueBg})no-repeat center;
        background-size:cover;
        transition:all 0.3s;
    }
`
const ButtonInner = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    height:100%;
`
const ButtonText = styled.h3`
    color: #583c27;
    font-size:15px;
    font-weight:700;
    font-family: 'Playfair Display',serif;
    transition:all 0.5s;
`

const ButtonImg = styled.h1`
    background:url(${BrownBg})no-repeat center;
    background-size:cover;
    width: 35px;
    height: 35px;
    margin:0 15px;
    transition:all 0.7s;
`


const Button = ({ buttonText }) => {
    return (
        <>
            <ButtonContainer>
                <ButtonInner>
                    <ButtonText>{buttonText}</ButtonText>
                        <ButtonImg />
                </ButtonInner>
            </ButtonContainer>
        </>
    )
}

export default Button
