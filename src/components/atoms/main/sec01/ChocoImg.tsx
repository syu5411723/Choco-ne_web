import React from 'react'
import styled, { keyframes } from 'styled-components'

import img01 from "../../../../images/yellow-1.png"
import img02 from "../../../../images/pink-1.png"
import img03 from "../../../../images/pink-2.png"
import img04 from "../../../../images/green-1.png"
import img05 from "../../../../images/brown-1.png"
import img06 from "../../../../images/brown-2.png"
import img07 from "../../../../images/yellow-2.png"
import img08 from "../../../../images/blue-1.png"
import img09 from "../../../../images/blue-2.png"


const Container = styled.div`
    width:100%;
`
const ImgInner = styled.div`
    width:100%;
    max-width:1000px;
    margin:0 auto;
    position: relative;
    & img {
        position:absolute;
        z-index: 1;
    }
`

const Loop = keyframes`
    to {
        transform: translateY(0px)
    }
    25% {
        transform:translateY(-10px)
    }
    50% {
        transform:translateY(0px)
    }
    75% {
        transform:translateY(10px)
    }
    100%{
        transform: translateY(0px)
    }
`

const Img01 = styled.img`
    width:250px;
    top:0px;
    left: 5%;
    animation: ${Loop} 5s -1 infinite linear;
`
const Img02 = styled.img`
    width:250px;
    top: 220px;
    left: -2%;
    animation: ${Loop} 5s infinite linear;

`
const Img03 = styled.img`
    width:250px;
    top: 50px;
    left: 28%;
    animation: ${Loop} 5s --2s infinite linear;

`
const Img04 = styled.img`
    width:250px;
    top:320px;
    left: 25%;
    animation: ${Loop} 5s infinite linear;
`
const Img05 = styled.img`
    width:220px;
    top:150px;
    left: 45%;
    animation: ${Loop} 5s -2s infinite linear;

`
const Img06 = styled.img`
    width:240px;
    top:20px;
    left: 62%;
    animation: ${Loop} 5s infinite linear;

`
const Img07 = styled.img`
    width:250px;
    top:300px;
    left: 65%;
    animation: ${Loop} 5s -1s infinite linear;

`
const Img08 = styled.img`
    width:250px;
    top:220px;
    left: 85%;
    animation: ${Loop} 5s -3s infinite linear;

`
const Img09 = styled.img`
    width:250px;
    top: 0;
    left: 80%;
    animation: ${Loop} 5s infinite linear;

`
const Img10 = styled.img`
    width:220px;
    top:500px;
    left: 60%;
    animation: ${Loop} 5s -2s infinite linear;
` 

const ChocoImg = () => {
    return (
        <>
            <Container>
                <ImgInner>
                    <Img01 src={img01} />
                    <Img02 src={img02} />
                    <Img03 src={img03} />
                    <Img04 src={img04} />
                    <Img05 src={img05} />
                    <Img06 src={img06} />
                    <Img07 src={img07} />
                    <Img08 src={img08} />
                    <Img09 src={img09} />
                    <Img10 src={img05} />
                </ImgInner>
            </Container>
        </>
    )
}

export default ChocoImg
