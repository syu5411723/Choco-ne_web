import React from 'react'
import styled from 'styled-components'

import FooterFromShop from '../../atoms/footer/FooterFromShop'
import FooterIcon from '../../atoms/footer/FooterIcon'


const FooterCnt = styled.div`
    padding-top: 300px;
    display:flex;
    width:80%;
    margin: 0 auto;
    justify-content:flex-end;
`


const FooterNav = () => {
    return (
        <>
            <FooterCnt>
                <FooterIcon />
            </FooterCnt>
            <FooterFromShop />
        </>
    )
}

export default FooterNav
