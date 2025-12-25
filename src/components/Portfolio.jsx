import {motion} from "framer-motion";
function Portfolio() {
  return (
    <motion.section id="portfolio"
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6}}
    >
      
      {
      <h2>To be updated...</h2>
      /* <div className="project-grid">
        <div className="project-card">
          <img src="/project1.jpg" className ="project image" alt="Project 1" />
          <div className="project-info">
            <h3>Chat App</h3>
            <p>Real-time dating app</p>
          </div>
        </div>

        <div className="project-card">
          <img src="/project2.jpg" alt="Project 2" />
          <div className="project-info">
            <h3>Blog App</h3>
            <p>Markdown-based blogging site</p>
          </div>
        </div>

        <div className="project-card">
          <img src="/project3.jpg" alt="Project 3" />
          <div className="project-info">
            <h3>Weather App</h3>
            <p>Live weather updates using API</p>
          </div>
        </div>
      </div> */}
    </motion.section>
  );
}

export default Portfolio;
