import React from 'react'
import styled from 'styled-components'

import waveBg from "../../images/wave-bottom.svg"
import FooterInc from '../atoms/footer/FooterInc'
import FooterNav from '../molclues/Footer/FooterNav'

const FooterContainer = styled.footer`
    background:url(${waveBg}) no-repeat;
    background-position:right;
    width:100%;
    height:525px;
`


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterNav />
                <FooterInc />
            </FooterContainer>
        </>
    )
}

export default Footer
