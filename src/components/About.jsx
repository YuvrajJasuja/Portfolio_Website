import { motion } from "framer-motion";
import { useState } from "react";
function About(){
    const [showMore, setShowMore] = useState(false);
    return(
        <motion.section id="about" 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        >
          <h2>About Me</h2>
          <p>I'm Yuvraj, a passionate developer.
            {showMore &&(
              <>
              <br/>
              I enjoy building something new , currently learning mern stack
              </>
            )}
          </p>
          <button onClick={()=>setShowMore(!showMore)}>
            {showMore ? "Read Less" : "Read More"}
          </button>
        </motion.section>
    );
}
export default About;