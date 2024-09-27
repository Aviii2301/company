// export default Header

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);
  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to toggle map visibility
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "#282c34",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <GiHamburgerMenu
          className="header1"
          style={{ color: "#bdc3c7", fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleForm}
        />
        <FaMapMarkedAlt 
          className="header2"
          style={{ color: "#bdc3c7", fontSize: "3rem", cursor: "pointer" }}
          onClick={toggleMap}
        />
      </div>

      {showForm && (
        <div
          style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}
        >
          <form>
            <div style={{ marginBottom: "0.5rem" }}>
              <label>Name:</label>
              <input type="text" style={{ marginLeft: "1rem" }} />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <label>Email:</label>
              <input type="email" style={{ marginLeft: "1rem" }} />
            </div>
            <button
              type="submit"
              style={{ marginTop: "0.5rem", padding: "0.5rem 1rem" }}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      <div
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          background: "#282c34",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      ></div>

      {showMap && (
        <div
          style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0259082920943!2d144.95373631586446!3d-37.81720974202169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ced60!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1632737602821!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Header;
