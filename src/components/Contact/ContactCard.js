import React from "react";
import Card from "react-bootstrap/Card";
import { FaDiscord, FaEnvelope, FaUser } from "react-icons/fa";

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Whether you need a quote or just want
            to chat about technology, feel free to reach out!
          </p>
          <br />
          
          <div style={{ marginTop: "20px" }}>
            <h3 className="purple" style={{ marginBottom: "20px" }}>
              Contact Information
            </h3>
            
            <div style={{ fontSize: "1.1em", lineHeight: "2.5" }}>
              <p>
                <FaUser style={{ marginRight: "10px", color: "#cd5ff8" }} />
                <strong>Name:</strong> Anas Mrani Alaoui
              </p>
              
              <p>
                <FaEnvelope style={{ marginRight: "10px", color: "#cd5ff8" }} />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact.anasysdev@gmail.com"
                  style={{ color: "#cd5ff8", textDecoration: "none" }}
                >
                  contact.anasysdev@gmail.com
                </a>
              </p>
              
              <p>
                <FaDiscord style={{ marginRight: "10px", color: "#cd5ff8" }} />
                <strong>Discord:</strong>{" "}
                <span className="purple">anasys0x</span>
              </p>
            </div>
          </div>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px" }}>
            "Let's build something amazing together!"
          </p>
          <footer className="blockquote-footer">Anas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
