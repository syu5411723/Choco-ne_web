import React from 'react'
import styled from 'styled-components'


import SubTitle from '../../atoms/SubTitle'
import bgImg from "../../../images/bg.svg"
import Sec02Content from '../../atoms/main/sec02/Sec02Content'
import Sec02BgContent from '../../atoms/main/sec02/Sec02BgContent'

const  Sec02Inner = styled.div`
    background:url(${bgImg}) no-repeat center;
    background-size:cover;
    width:100%;
    height:850px;
    margin: 200px 0;

`
const Sec02Container = styled.section`
    position:relative;
    overflow:hidden;
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
                <Sec02Inner>
                <Sec02BgContent />
                <TitlteWrapper>
                    <SubTitle title="一粒に。" title02="おいしい驚き、" />
                </TitlteWrapper>
                <Sec02Content />
                </Sec02Inner>
            </Sec02Container>
        </>
    )
}

export default Sec02
