import './Sidebar.css';

function Sidebar() {
  return (
    <div id="sidebar">
      <img 
        src="mpplogo.jpg" 
        alt="Yuvraj Jasuja" 
        className="profile-img"
      />
      
      <h2 className="name">Yuvraj Jasuja</h2>
      <p className="role"><h4>Software Developer</h4></p>
      
      <div className="contact-info">
        <p>
          
          <a href="mailto:yuvrajjasuja11981@gmail.com" className="link">
            yuvrajjasuja11981@gmail.com
          </a>
        </p>
        
        <p>
          <strong>Location:</strong> India,Patiala
        </p>
      </div>
      
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          Github
        </a>
        <a 
          href="https://www.instagram.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Sidebar;