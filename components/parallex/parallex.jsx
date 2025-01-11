"use client"
import { useRef } from "react"
import "./parallex.css"
import { motion , useScroll, useTransform } from "motion/react"


const Parallex = ({type})=> {

    const ref = useRef()
    const {scrollYProgress}  = useScroll({
        target:ref,
        offset:["start start","end start"]

    })


    const YBg = useTransform(scrollYProgress,[0,1],["-150%","200%"])
    // const YText = useTransform(scrollYProgress,[0,1],["-30%","100%"])
    const YText = useTransform(scrollYProgress,[0,1],["-30%","150%"])
    const YStars = useTransform(scrollYProgress,[0,1],["-100px","1400px"])
    return(
    <div className="parallex" id="parallex" style={{background: type == "Skills" ?  "linear-gradient(180deg,#0c0c1d,#111132)" : "linear-gradient(180deg,#505064,#111132)"}}>
        <motion.h1 style={{y:YBg}}>{type == "Skills" ? "What We Did" : "What We Do"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{x:YText,backgroundImage:`url(${type == "Skills" ? "https://raw.githubusercontent.com/safak/animated-portfolio/refs/heads/starter/public/planets.png" :"https://raw.githubusercontent.com/safak/animated-portfolio/refs/heads/starter/public/sun.png"})`}} className="plantes" ></motion.div>
        <motion.div style={{x:YStars}} className="stars"></motion.div>
    </div>
    )
}

export default Parallex