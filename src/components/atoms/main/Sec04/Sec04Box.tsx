import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import SecBoxcnt from './SecBoxcnt'

const BoxCnt = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const Sec04Box = ({ img, reverce, cnt01, cnt02, cnt03, cnt04, transitionX }) => {
    const BoxImg = styled(motion.div)`
    background-image:url(${img});
    background-repeat:no-repeat;
    background-position:right;
    background-size:cover;
    width: 50%;
    height:100%;
    `
    const Box = styled.div`
        display:flex;
        justify-content:space-between;
        flex-direction:${(reverse) => reverce ? "row-reverse" : "row"};
        margin: 170px 0 300px 0;
        height:430px;
    `
    return (
        <>
            <Box>
                <BoxImg />
                <BoxCnt>
                    <SecBoxcnt transitionX={transitionX} cnt01={cnt01} cnt02={cnt02} cnt03={cnt03} cnt04={cnt04} />
                </BoxCnt>
            </Box>
        </>
    )
}

export default Sec04Box
