import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { data } from "./data/Sec05Data"
import Sec05Thumb from '../../atoms/main/sec05/Sec05Thumb'
import Sec05Title from '../../atoms/main/sec05/Sec05Title'
import SecTitle from '../../atoms/SecTitle'
import Sec05Cnt from '../../atoms/main/sec05/Sec05Cnt'
import Secc05Button from '../../atoms/main/sec05/Secc05Button'
import Sec05Img from '../../atoms/main/sec05/Sec05Img'
import Sec05Sub from '../../atoms/main/sec05/Sec05Sub'


const Sec05Container = styled.div`
    margin-left: 70px;
    margin-bottom: 250px;
    position: relative;
    padding-bottom: 2300px;
    overflow:hidden;
`
const TitleWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
`
const Sec05ContentWrapper = styled(motion.div)`
    margin-top: 200px;
    position: absolute;
    z-index: 10;
`
const Sec05ImgWrapper = styled.div`
    margin-top: 200px;
    position: absolute;
    right:0;
    z-index: 1;
`

const Sec05 = () => {
    return (
        <>
            <Sec05Container>
                <TitleWrapper>
                    <SecTitle span="L" text01="I" text02="N" text03="E" text04="U" text05="P" />
                </TitleWrapper>
                {data.map((item) => (
                    <>
                        <Sec05Sub text01={item.thumb01} text02={item.thumb02} titleImg={item.titleImge} subTitle={item.subTitle} cntText={item.content} top={item.top} img={item.bubbleImg} />
                    </>
                ))}
            </Sec05Container>
        </>
    )
}

export default Sec05
