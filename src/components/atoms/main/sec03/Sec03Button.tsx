import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ButtonContainer = styled.div`
    background: #583c27;
    width: 300px;
    height: 60px;
    cursor: pointer;
    position:relative;
    transition:all 0.7s;
    &:hover h3{
        color:#6ADFDC;
        transition:all 0.3s;
    }
    &:hover{
        transition:all 0.3s;
        background: #fff;
    }
`
const ButtonInner = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
`
const ButtonText = styled.h3`
    color: #fff;
    font-size:15px;
    font-weight:700;
    font-family: 'Playfair Display',serif;
    transition:all 0.5s;
`


const Sec03Button = () => {
    return (
        <>
            <ButtonContainer>
                <ButtonInner>
                    <ButtonText>VIEW MORE</ButtonText>
                </ButtonInner>

            </ButtonContainer>
        </>
    )
}

export default Sec03Button




