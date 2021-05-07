import React from 'react'
import styled from "styled-components"



const ArrowWrapper  = styled.div`
    position:absolute;
    left: 10px;
    top:20px;

`
const Arrow01 = styled.div`
    width:5px;
    height:1px;
    background-color: #fff;
`
const Arrow02 = styled.div`
    width:10px;
    height:1px;
    background-color:#fff;
`

const Arrow = () => {
    return (
        <>
            <ArrowWrapper>
                <Arrow01 />
                <Arrow02 />
            </ArrowWrapper>
        </>
    )
}

export default Arrow
