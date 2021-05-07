import React from 'react'
import styled from 'styled-components'

import { data } from "./Sec03Date"
import SectionTitle from '../../atoms/SectionTitle'
import Box from '../../atoms/main/sec03/Box'
import Sec03Button from "../../atoms/main/sec03/Sec03Button"



const Sec03Container = styled.div`
    padding-top: 200px;
`
const TitleWrapper = styled.div`
    display:flex;
    justify-content:center;
`
const BoxContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
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
                <TitleWrapper>
                    <SectionTitle Blue="N" title="EWS" />
                </TitleWrapper>
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
