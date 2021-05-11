import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/header/Button'
import HeaderList from '../atoms/header/HeaderList'
import HeaderLogo from '../atoms/header/HeaderLogo'

const HeaderInner = styled.div`
    display:flex;
    width:95%;
    height:100%;
    margin:0 auto;
    align-items:center;
    position:relative;
`
const ListWrapper = styled.div`
    margin-left: 18vw;
    display:flex;
`
const ButtonWrapper = styled.div`
    width: 250px;
    height: 50px;
    position:absolute;
    right:0;
`

const HeaderNav = () => {
    return (
        <>
            <HeaderInner>
                <HeaderLogo />
                <ListWrapper>
                    <HeaderList props="NEWS" />
                    <HeaderList props="ABOUT" />
                    <HeaderList props="LINE UP" />
                    <HeaderList props="SHOPS" />
                    <HeaderList props="BUSINES" />
                </ListWrapper>
                <ButtonWrapper>
                <Button buttonText="ONLINE SHOP" />
                </ButtonWrapper>
            </HeaderInner>
        </>
    )
}

export default HeaderNav
