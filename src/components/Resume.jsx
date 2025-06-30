import {motion} from "framer-motion";
function Resume(){
    return(
        <motion.section id="resume"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
        >
          <h2>Resume</h2>
          <div className="timeline">
            {[1, 2, 3].map((_, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>AI learning <span> - Sept 2024 to today</span></h3>
                  <p>Building a new kind of intelligence</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
    );
}
export default Resume;