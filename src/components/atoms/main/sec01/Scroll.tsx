import React from 'react'
import styled from 'styled-components'

const ScrollContainer =  styled.div`
    text-align:center;
    display:flex;
    flex-direction:column;
    margin-top: 170px;
`
const ScrollText = styled.p`
    font-size: 12px;
    font-weight:700;
    letter-spacing: .12rem;
    font-family: "Playfair Display", serif;
    margin-bottom: 20px;
`
const ScrollBar = styled.div`
    width:1px;
    height:70px;
    background-color:#583c27;
    margin:0 auto;
`

const Scroll = () => {
    return (
        <>
        <ScrollContainer>
            <ScrollText>SCROLL</ScrollText>
            <ScrollBar />
        </ScrollContainer>
        </>
    )
}

export default Scroll
