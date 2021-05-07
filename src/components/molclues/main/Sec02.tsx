import React from 'react'
import styled from 'styled-components'


import SubTitle from '../../atoms/SubTitle'
import bgImg from "../../../images/bg.svg"
import Sec02Content from '../../atoms/main/sec02/Sec02Content'


const Sec02Container = styled.section`
    background:url(${bgImg}) no-repeat center;
    background-size:cover;
    width:100%;
    height:850px;

`
const TitlteWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 20px;
`

const Sec02 = () => {
    return (
        <>
        
            <Sec02Container>
                <TitlteWrapper>
                    <SubTitle title="一粒に。" title02="おいしい驚き、" />
                </TitlteWrapper>
                <Sec02Content />
            </Sec02Container>
        </>
    )
}

export default Sec02
