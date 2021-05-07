import React from "react";
import "./App.scss";
import {
  FaEnvelope,
  FaFacebook,
  FaSpotify,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const App = () => {
  return (
    <div className="app">
      <img
        className="avatar"
        src="https://linkrr.in/uploads/avatars/13eb41f6a112c6773427fc24b53d06b1.png"
        alt="Avatar"
      />
      <div id="title">
        <h1 className="title">DESIGNSUBWAY</h1>
        <p className="sub-title">GRAPHIC DESIGNER</p>
      </div>
      <div id="button">
        <button
          className="button"
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          Photoshop Course
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#ff0000", color: "#FFFFFF" }}
        >
          YOUTUBE
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#0D0D0D", color: "#FFF7F7" }}
        >
          SUPPORT ME
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#0095FF", color: "#FFFFFF" }}
        >
          TELEGRAM CHANNEL
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#003638", color: "#FFFFFF" }}
        >
          HOW TO GROW YOUR INSTAGRAM
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#D9FF38", color: "#000" }}
        >
          RECOMMENDED LAPTOPS
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#00FF00", color: "#FFFEFE" }}
        >
          HIRE ME ON FIVERR{" "}
        </button>
        <button
          className="button"
          style={{ backgroundColor: "#00C343", color: "#FFFFFF" }}
        >
          WHATSAPP GROUP
        </button>
      </div>
      <div className="contact-menu">
        <FaEnvelope className="contact-icon" />
        <FaFacebook className="contact-icon" />
        <FaInstagram className="contact-icon" />
        <FaTwitter className="contact-icon" />
        <FaYoutube className="contact-icon" />
        <FaLinkedin className="contact-icon" />
        <FaSpotify className="contact-icon" />
      </div>
      <p className="footer">Designsubway</p>
    </div>
  );
};

export default App;
