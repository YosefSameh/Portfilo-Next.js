import { animate, stagger } from "motion";
import "./hero.css"
import * as motion from "motion/react-client"
const Hero = () => {

    const textVariants = {
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildern:0.1
            }
        },
        scrolllBuuton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }
    }
    const SliderVariants = {
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:20,
            }
        }
        
    }
    return (
      <div className="hero container">
        <div className="wraap">
          <motion.div
            className="textContiner"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>YosefSameh</motion.h2>
            <motion.h1 variants={textVariants}>
              Web Developer FullStack
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
              <motion.div
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
               transition={{ type: "spring", stiffness: 300 }}
                >
                    <a href="#project">See The Latest Works</a>{" "}
                </motion.div>
              </motion.button>
              <motion.button variants={textVariants}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#contact">Contact Me</a>
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.img
              variants={textVariants}
              animate="scrolllBuuton"
              src="https://raw.githubusercontent.com/safak/animated-portfolio/refs/heads/starter/public/scroll.png"
              alt=""
            />
          
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContiner"
          variants={SliderVariants}
          animate="animate"
          initial="initial"
        >
          Web Developer
        </motion.div>
          
        <div className="imgContiner">
          <img
            src="https://raw.githubusercontent.com/safak/animated-portfolio/refs/heads/starter/public/hero.png"
            alt="photo"
          />
        </div>
          
      </div>
    );
}

export default Hero
