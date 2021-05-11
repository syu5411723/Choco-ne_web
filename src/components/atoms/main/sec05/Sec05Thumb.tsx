import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import img from "../../../../images/cross.svg"

const ThumbWrapper = styled(motion.div)`
    display:flex;
`


const Text = styled.p`
    font-size:18px;
    margin-right: 25px;

`
const Text02 = styled.p`
    font-size: 18px;
    margin-left: 25px;
`
const CrossImg = styled(motion.img)`
    margin-top: -10px;

`

const Sec05Thumb = ({text01, text02}) => {
    return (
        <>
            <ThumbWrapper>
                <Text>{text01}</Text>
                <CrossImg src={img} />
                <Text02>{text02}</Text02>
            </ThumbWrapper>
        </>
    )
}

export default Sec05Thumb
