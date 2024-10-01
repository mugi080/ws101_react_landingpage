import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      
      <nav>
        <a href="#" className="port">LESTER</a>
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#basic">Start</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#basic">Start</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div id="landing" className="landing">
        <h1>Craft the Digital World: Learn to Code and Innovate!</h1>
        <p>Join the revolution in web development and start creating your future today.</p>
        <p>Embrace the challenge, unlock your creativity, and make a difference in the world.</p>
        <a href="#about" className="learn">Learn More</a>
      </div>

      <div id="about" className="ako">
        <h2>About Me</h2>
        <p>Hello! I'm <span className="name">JHON LESTER</span>, a second-year IT student at Dalubhasaan ng Lungsod ng Lucena.</p>
      </div>

      <div id="basic" className="section">
        <h2>YOU CAN START HERE!!</h2>
        <p>These are the basics you can practice:</p>
        <div className="basic">
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" />
          </a>
        </div>
      </div>

      <div id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for any inquiries or collaborations.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; 2024 made by Jhon Lester Andal BSIT - 3b. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
