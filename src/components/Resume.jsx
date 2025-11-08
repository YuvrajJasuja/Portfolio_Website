import { motion } from "framer-motion";
function Resume(){
    return(
        <motion.section id="resume"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
        >
          <div className="timeline">
  {/* University */}
  <div className="timeline-item">
    <div className="timeline-content">
      <h2>
        <span className="font-bold text-yellow-400">Thapar University</span>
        <span> — 2024 to 2028</span>
      </h2>
      <p>Pursuing B.Tech and exploring AI, software development, and leadership opportunities.</p>
    </div>
  </div>

  {/* ISTE Member */}
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h4>
        ISTE (Indian Society for Technical Education)
        <span> — 2024 to 2025</span>
      </h4>
      <p>Served as a <span className="font-semibold">Member</span>, contributing to technical workshops and events.</p>
    </div>
  </div>

  {/* Saturnalia Core + ISTE Core */}
  <div className="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-content">
      <h4>
        Saturnalia & ISTE
        <span> — 2025 to 2026</span>
      </h4>
      <p>
        Joined <span className="font-semibold">Saturnalia</span> society as a <span className="font-semibold">Core Member</span> and promoted to <span className="font-semibold">Core</span> in ISTE for active contribution and leadership.
      </p>
    </div>
  </div>
</div>

        </motion.section>
    );
}
export default Resume;