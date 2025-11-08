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
          <p>Hello I'm Yuvraj, software developer nice you see you here.
            {showMore &&(
              <>
              <br/>
              <br/>
              🎓 Bachelor of Technology (B.Tech) graduate from Thapar University, Patiala, with a strong foundation in computer science and modern software engineering principles.
              <br/>
              <br/>
              💻 Passionate Software Engineer with a keen interest in Artificial Intelligence, Full-Stack Development, and creating impactful digital solutions.
              <br/>
              <br/>
              🧠 Enthusiastic about exploring the latest AI technologies — from machine learning models to intelligent systems that enhance user experience and decision-making.
              <br/>
              <br/>
              🤝 People-oriented — love talking to individuals, making new connections, and learning from diverse perspectives.
              <br/>
              <br/>
              🎮 Enjoy exploring projects, participating in tech events, and collaborating in team-driven environments.
              <br/>
              <br/>
              🏸 Play badminton for fun and fitness — it keeps me energized and helps build focus and teamwork.
              <br/>
              <br/>
              🚀 Looking forward to opportunities where I can combine my technical expertise, creativity, and communication skills to make a real impact.
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