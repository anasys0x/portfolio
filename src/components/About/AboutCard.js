import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Anas Mrani Alaoui</span>.
            <br />
            I'm currently studying{" "}
            <span className="purple">Computer Science</span> at the{" "}
            <span className="purple">University of Montreal</span>.
            <br />
            <br />
            I'm passionate about technology and constantly exploring new ways to
            create innovative solutions through software development.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
