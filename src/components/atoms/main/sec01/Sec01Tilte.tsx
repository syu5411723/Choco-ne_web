import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import titleImg from  "../../../../images/title.png"

const TitleWrapper  = styled(motion.div)`
    position:absolute;
    top:700px;
    left: 60px;

`
const TitleImg = styled.img`
    width:400px;
`

const titleV = {
    hidden:{opacity:0, x: "-100px"},
    visible:{opacity:1, x: "0px", transition:{duration: 0.7, delay:0.2}}
}

const Sec01Tilte = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce:true,
    });
    return (
        <>
            <TitleWrapper
                ref={ref} imView={inView}
                variants={titleV}
                animate={inView ? "visible" : "hidden"}
            >
                <TitleImg src={titleImg} /> 
            </TitleWrapper>
        </>
    )
}

export default Sec01Tilte
