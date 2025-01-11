
import { useEffect, useRef, useState } from "react"
import "./projects.css"
import { motion, useSpring, useScroll, useTransform } from "motion/react"


const Projects = () => {

    useEffect(() => {
      fetchProjects();
      }, []);

    const [project , setProjects] =  useState([])

    const fetchProjects = async () => {
        try {
          const response = await fetch(
            `https://portfilo-node-js.vercel.app/api/Projects`
          );
    
          const data = await response.json();
          
    
          setProjects(data.data.projects);
        
        } catch (error) {
          console.error("Error fetching products:", error);
        } 
      };
    


    const Singel  = ({item}) => {

        const ref = useRef()
        const {scrollYProgress} = useScroll({
            target:ref,
            //offset:["start start","end start"] 
        }) 

        const y = useTransform(scrollYProgress, [0,1] , [-300,300])
        return (
          <section id="project" className="project" style={{height: "80vh"}} >
            <div className="continaire" 
            
            >
            <div className="wrapper">
                <div className="imgContiners" ref={ref}>

              <img src={`${item.Img}`} alt="ldkfjsklfjsklfjskldjf" />
                </div>
              <motion.div className="textContiner" style={{ y: y }}>
                <h2>{item.Titel}</h2>
                <p>{item.Des}</p>
                <motion.div
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
               transition={{ type: "spring", stiffness: 300 }}
                >
                <button><a href={item.Url   } target="_blank">SeeDemo</a></button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          </section>
        );
        
    }

    
    return(
        <div className="projects">
            <div className="progress">
                <h1>Projects</h1>
        
            </div>
            
            {project.map((item)=>(
                <Singel item={item} key={item._id}/>
            ))}
        </div>
    )
}


export default Projects