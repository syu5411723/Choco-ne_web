import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Text = styled(motion.p)`
    text-align:center;
    font-family: 遊明朝体 "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif;
    font-weight:500;
    line-height: 45px;
    font-size: 18px;
`

const textV = {
    hidden:{opacity:0, y:"100px"},
    visible: {opacity:1, y: "0px", transition:{duration:0.7}},
}

const Sec02Content = () => {
    const [ref, inView] = useInView({
        rootMargin:"-100px 0px",
        triggerOnce:true,
    })
    const [ref02, inView02] = useInView({
        rootMargin:"-100px 0px",
        triggerOnce:true,
    });
    return (
        <>
            <Text ref={ref} inView={inView}
                variants={textV}
                animate={inView ? "visible" : "hidden"}
            >
                チョコとラムネ。<br />それはワクワクするようなめぐり逢い。<br />お菓子の世界の小さな革命。
                <br /><br />
            </Text>
            <Text ref={ref02} inView02={inView02}
                variants={textV}
                animate={inView02? "visible" : "hidden" }
            >
                薫る上質なチョコレートと<br />
                ほろほろラムネの懐かしい甘酸っぱさ。<br />
                2つのスイーツが織りなす<br />
                新感覚のおいしさを<br />
                あなたに届けます。<br />
            </Text>
        </>
    )
}

export default Sec02Content
