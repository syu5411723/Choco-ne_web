import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom"


const NavLists = styled(motion.ul)`
`
const NavItem = styled(motion.li)`
    margin-right: 45px;
    &:hover div{
        width:100%;
    }
`
const NavLink = styled(Link)`
    text-decoration:none;
    color: #583c27;
    font-size:14px;
    font-weight: 800;
    font-family: 'Playfair Display',serif;
    
`
const Line = styled.div`
    width:0;
    height:1px ;
    background-color: #583c27;
    transition: all 0.5s ease-out;
`

const HeaderList = ({props}) => {
    return (
        <>
            <NavLists>
                <NavItem>
                    <NavLink to="#">{props}</NavLink>
                    <Line />
                </NavItem>
            </NavLists>
        </>
    )
}

export default HeaderList
