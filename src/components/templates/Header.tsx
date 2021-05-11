import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import HeaderLogo from '../atoms/header/HeaderLogo'
import HeaderNav from '../molclues/HeaderNav'

const HeaderContainer = styled(motion.header)`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100px;
    z-index: 99;
    background-color: rgba(228,253,252, 0.8);
`

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderNav />
            </HeaderContainer>
        </>
    )
}

export default Header
