import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/send", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  }
    return(
        <motion.section id="extra"
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        >
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required   value={formData.name}  onChange={handleChange}/>
            <input type="email" placeholder="Your Email" required  value={formData.name}  onChange={handleChange}/>
            <textarea placeholder="Your Message" rows="5" required  value={formData.name}  onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
          <p>{status}</p>
        </motion.section>
    );
}
export default Contact;