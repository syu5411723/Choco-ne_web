import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import logo from "../../../images/logo.png"

const LogoImg = styled(motion.img)`
    width:120px;
    position:absolute;
    left: 0;
`

const HeaderLogo = () => {
    return (
        <>
            <LogoImg src={logo} />
        </>
    )
}

export default HeaderLogo
