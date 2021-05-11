import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Cnt = styled(motion.p)`
    font-size:16px;
    width:90%;
    margin: 50px auto;
    margin-bottom: 0px;

`

const Sec04Cnt = () => {
    return (
        <>
            <Cnt>懐かしのラムネ菓子をフレーバーチョコレートで包み込んだ新感覚スイーツ「ショコネ」について。</Cnt>
        </>
    )
}

export default Sec04Cnt
