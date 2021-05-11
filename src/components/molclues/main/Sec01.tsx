import React from 'react'
import styled from 'styled-components'
import ChocoImg from '../../atoms/main/sec01/ChocoImg'
import Scroll from '../../atoms/main/sec01/Scroll'
import Sec01Tilte from '../../atoms/main/sec01/Sec01Tilte'
import Swiper from '../../atoms/main/sec01/Swiper'

const Sec01Container = styled.section`
    /* position:relative; */
    margin-top: 130px;
`

const Sec01 = () => {
    return (
        <>
            <Sec01Container>
                <ChocoImg />
                <Swiper />
                <Sec01Tilte />
                <Scroll />
            </Sec01Container>
        </>
    )
}

export default Sec01
