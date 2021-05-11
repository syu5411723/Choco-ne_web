import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Sec05CntWrapper = styled(motion.p)`
    margin-top: 50px;
    font-size: 16px;
    line-height:30px;
    width:550px;
    
`

const Sec05Cnt = ({cntText}) => {
    return (
        <>
            <Sec05CntWrapper>{cntText}</Sec05CntWrapper>
        </>
    )
}

export default Sec05Cnt
