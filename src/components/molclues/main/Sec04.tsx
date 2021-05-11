import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

import { data } from "./data/Sec04Data"
import Sec04Title from '../../atoms/main/Sec04/Sec04Title'
import Sec04Cnt from '../../atoms/main/Sec04/Sec04Cnt'
import Sec04Box from '../../atoms/main/Sec04/Sec04Box'
import img1 from "../../../images/img-1.jpg"
import SectionTitle from '../../atoms/SectionTitle'
import SecTitle from '../../atoms/SecTitle'


const Sec04Container = styled.div`
    padding-top: 180px;
    width:100%;
    overflow:hidden;
`




const Sec04 = () => {
    return (
        <>
            <Sec04Container>
                <SecTitle span="A" text01="B" text02="O" text03="U" text04="T" text05="" />
                <Sec04Cnt />
                {data.map((item) => (
                    <Sec04Box  img={item.BoxImg} transitionX={item.x} reverce={item.reverse} cnt01={item.BoxCnt01} cnt02={item.BoxCnt02} cnt03={item.BoxCnt03} cnt04={item.BoxCnt04} />
                ))}
            </Sec04Container>
        </>
    )
}

export default Sec04
