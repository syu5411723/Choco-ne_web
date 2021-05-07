import React from 'react'
import styled from 'styled-components'
import { Swiper as Slide, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

const SwiperContainer = styled.div`
`
SwiperCore.use([Autoplay]);

const SwiperText = styled.h1`
    font-size: 180px;
    font-family: "Playfair Display", serif;
    font-weight:700;
    color: #d1faf9;
    letter-spacing:.24rem;
    white-space:nowrap;
`

const Swiper = () => {
    return (
        <>
            <SwiperContainer>
                <Slide
                    // autoplay={{
                    //     delay: 10000,
                    //     disableOnInteraction: false
                    // }}
                    // loop={true}
                >
                    <SwiperSlide>
                        <SwiperText>
                            Slide 1
                            </SwiperText>
                    </SwiperSlide>
                </Slide>
            </SwiperContainer>
        </>
    )
}

export default Swiper
