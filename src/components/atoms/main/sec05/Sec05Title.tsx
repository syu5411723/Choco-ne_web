import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const TitleImg = styled(motion.img)`
        margin-top: 20px;

`
const SubTitle = styled(motion.p)`
    margin-top: 10px;
    font-size: 15px;
`

const Sec05Title = ({titleImg, subTitle}) => {
    return (
        <>
            <TitleImg src={titleImg}/>
            <SubTitle>{subTitle}</SubTitle>
        </>
    )
}

export default Sec05Title
