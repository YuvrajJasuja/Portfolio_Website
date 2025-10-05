 function Sidebar(){
    return(
 <aside id="sidebar">
        <img src="/mplogo.jpg" className="profile-img" alt="profile" />
        <h1>Yuvraj Jasuja</h1>
        <p className="role">Software Developer</p>

        <div className="contact-info">
          <p><strong>Email:</strong> yuvrajjasuja11981@gmail.com</p>
          <p><strong>Location:</strong> India</p>
        </div>

        <div className="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
        </div>
      </aside>
);
}
export default Sidebar;