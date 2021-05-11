import { motion, useTransform, useViewportScroll } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import img01 from "../../../../images/img-3.png"
import img02 from "../../../../images/img-1.png"
import img03 from "../../../../images/img-2.png"
import img04 from "../../../../images/shape-w-1.svg"
import img05 from "../../../../images/shape-b-2.svg"
import img06 from "../../../../images/shape-b-1.svg"
import img07 from "../../../../images/shape-w-2.svg"



const Container = styled.div``
const Imgwrapper01 = styled(motion.div)``
const ImgWrapper02 = styled(motion.div)``
const Img01 = styled(motion.img)`
    position:absolute;
    top:350px;
    left: -100px;
    width:400px;
    height:400px;
    z-index: 10;
`
const Img02 = styled(motion.img)`
    position:absolute;
    top:550px;
    right: -100px;
    z-index: 10;
    width:380px;
    height: 380px;
    overflow:hidden;
`
const Img03 = styled(motion.img)`
    position:absolute;
    bottom: 100px;
    left: 50px;
    width: 250px;
    height: 250px;
    z-index: 10;

`
const Img04 = styled(motion.img)`
    position:absolute;
    z-index: 1;
    top:400px;
    left: 150px;
`
const Img05 = styled(motion.img)`
    position:absolute;
    z-index: 1;
    top:700px;
    right:200px;

`
const Img06 = styled(motion.img)`
    position:absolute;
    z-index: 1;
    top:880px;
    left: 10px;
`
const Img07 = styled(motion.img)`
    position:absolute;
    z-index: 1;
    bottom:-200px;
    right: 0;
`


const Sec02BgContent = () => {
    const { scrollYProgress } = useViewportScroll();
    const { scrollY } = useViewportScroll();
    const top = useTransform(scrollYProgress, [0 , 1], [0,0.3])
    const y = useTransform(scrollY, [0, 1500], [0, -150]);
    const y2 = useTransform(scrollY, [0, 1500], [0, -400]);

    return (
        <>
            <Imgwrapper01>
                <Img01 src={img01} style={{y: y}}/>
                <Img02 src={img02} style={{y: y}} />
                <Img03 src={img03} style={{y: y}} />
            </Imgwrapper01>
            <ImgWrapper02>
                <Img04 src={img04} style={{y: y2}} />
                <Img05 src={img05} style={{y: y2}} />
                <Img06 src={img06} style={{y: y2}} />
                <Img07 src={img07} style={{y: y2}} />
            </ImgWrapper02>
        </>
    )
}

export default Sec02BgContent
