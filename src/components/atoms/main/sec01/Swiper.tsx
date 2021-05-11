import React from 'react'
import styled, { keyframes } from 'styled-components'


const Loop01 = keyframes`
    0% {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
`
const Loop02 = keyframes`
    0% {
        transform: translateX(0);
    }
    to{
        transform: translateX(-200%);
    }
`

const LoopWrapper = styled.div`
    height:400px;
    width:100%;
    overflow:hidden;
    padding-top:150px;

`
const LoopInner = styled.div`
    width:5400px;
    height:100%;
    display:flex;
    justify-content:space-between;
`
const LoopText01 = styled.h1`
    width:2700px;
    height:100%;
    font-size: 180px;
    font-family: "Playfair Display", serif;
    font-weight:700;
    color: #d1faf9;
    letter-spacing:.24rem;
    white-space:nowrap;
    animation: ${Loop01} 70s  linear infinite;
    display:block;
`
const LoopText02 = styled.h1`
    width:2700px;
    height:100%;
    font-size: 180px;
    font-family: "Playfair Display", serif;
    font-weight:700;
    color: #d1faf9;
    letter-spacing:.24rem;
    white-space:nowrap;
    animation: ${Loop02} 70s -35s linear infinite;
    display:block;
`

const Swiper = () => {
    return (
        <>
            <LoopWrapper>
                <LoopInner>
                    <LoopText01>CHOCOLATE & RAMUNE</LoopText01>
                    <LoopText02>CHOCOLATE & RAMUNE</LoopText02>
                </LoopInner>
            </LoopWrapper>
        </>
    )
}

export default Swiper
