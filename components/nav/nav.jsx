import Image from "next/image";
import "./nav.css"

import * as motion from "motion/react-client"

const Nav = () => {

    return (
      <div className="navbar container">
        
          <motion.div
            className="wrraper container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              // scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <span>YosefSameh</span>
            <div className="sochil">
              <a href="https://www.facebook.com/yosef.sameh.969" target="_blank">
                <img
                  src={
                    "https://th.bing.com/th?id=OIP.rHUnyNRNkBKVEK4HlTzCgQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  }
                  alt="FaceBook"
                />
              </a>
              <a href="https://www.linkedin.com/in/yosaef-sameh-b67695278" target="_blank">
                <img
                  src={
                    "https://th.bing.com/th/id/R.15fd5adb3c750e71a0e6ba69caaabe5f?rik=r4eO9JHsawHnKg&pid=ImgRaw&r=0"
                  }
                  alt="Linked in"
                />
              </a>
            </div>
          </motion.div>
        
      </div>
    );
} 

export default Nav;