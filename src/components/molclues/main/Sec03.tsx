import React from 'react'
import styled from 'styled-components'

import { data } from "./data/Sec03Date"
import SectionTitle from '../../atoms/SectionTitle'
import Box from '../../atoms/main/sec03/Box'
import Sec03Button from "../../atoms/main/sec03/Sec03Button"



const Sec03Container = styled.div`
    width:100%;
    overflow:hidden;
`
const BoxContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
    max-width: 900px;
    margin: 0 auto;
`
const ButtonWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top: 50px;

`

const Sec03 = () => {
    return (
        <>
            <Sec03Container>
                    <SectionTitle span="N" text01="E" text02="W" text03="S" />
                <BoxContainer>
                    {data.map((item) => (
                        <Box img={item.BoxImg} title={item.BpxtTitle} text={item.boxText} delay={item.BoxDelay} />
                    ))}
                </BoxContainer>
                <ButtonWrapper>
                    <Sec03Button />
                </ButtonWrapper>
            </Sec03Container>
        </>
    )
}

export default Sec03
