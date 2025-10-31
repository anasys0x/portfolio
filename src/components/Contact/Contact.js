import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <Container fluid className="contact-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
