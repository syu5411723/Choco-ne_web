import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

import HeaderList from '../header/HeaderList'

const IconWrapper = styled.div`

`
const ListWrapper = styled.ul`
    display:flex;
`



const FooterIcon = () => {
    return (
        <>
            <ListWrapper>
                <HeaderList props="NEWS" />
                <HeaderList props="ABOUT" />
                <HeaderList props="LINE UP" />
                <HeaderList props="SHOPS" />
                <HeaderList props="BUSINES" />
            </ListWrapper>
        </>
    )
}

export default FooterIcon
