"use client";
import "./skills.css"

import { motion } from "framer-motion";

const skills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "BootStrap", percentage: 90 },
    { name: "MUI", percentage: 75 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Next", percentage: 75 },
    { name: "Node.js", percentage: 45 },
    { name: "Mongodb", percentage: 40 },
    { name: "GitHup", percentage: 85 },
];

export default function Skills() {
  return (
    <section
    id="skills"
      className="skills-section"
      style={{
        background: "linear-gradient(135deg, #0f0f1f, #1c1c3c)",
        padding: "5.5rem 2rem",
        color: "#fff",
        height:"fit-content"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "3rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        My Skills
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
            //   delay: index * 0.2,
            //   ease: "easeOut",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.7)",
            }}
          >
            <div className="circle w-100">
              <svg width="190" height="190">
                <circle
                  cx="95"
                  cy="95"
                  r="85"
                  stroke="#222"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="95"
                  cy="95"
                  r="85"
                  stroke="#4caf50"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="534"
                  strokeDashoffset="534"
                  animate={{
                    strokeDashoffset:
                      534 - (534 * skill.percentage) / 100,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="skill-text">
                <span>{skill.percentage}%</span>
                <small>{skill.name}</small>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .skills-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.5rem;
        }
        .skill {
          width: 190px;
          height: 190px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle, #1c1c3c, #111);
          border-radius: 50%;
          position: relative;
        }
        .circle {
          position: relative;
          width: 170px;
          height: 170px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .skill-text {
          position: absolute;
          text-align: center;
          color: #fff;
          font-size: 1.1rem;
        }
        .skill-text span {
          font-size: 1.6rem;
          font-weight: bold;
        }
        .skill-text small {
          display: block;
          margin-top: 0.2rem;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
  