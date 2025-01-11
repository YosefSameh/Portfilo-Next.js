"use client"
import Image from "next/image";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import "./globals.css";
import Parallex from "./components/parallex/parallex";
import { motion, useSpring, useScroll } from "motion/react"
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
export default function Home() {
  const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

  return (
    <div className="">
       <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#01016b ",
                    zIndex:500
                }}
            />
      <section className=""><Nav/>
      <Hero/>
      </section>
      <section><Parallex type="Skills"/></section>
      <section className="h-100 "><Skills/></section>
      <section><Parallex type="Projects"/></section>
      <Projects/>
      <section className="h-100"><Contact /></section>
    </div>
  );
}
