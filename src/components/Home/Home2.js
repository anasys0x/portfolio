import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Computer Science student at the
              <i>
                <b className="purple"> University of Montreal</b>
              </i>
              , passionate about technology and software development.
              <br />
              <br />
              I'm constantly learning and exploring new technologies to build
              innovative solutions and expand my skills in the field of
              computer science.
              <br />
              <br />
              Feel free to reach out to me at{" "}
              <i>
                <b className="purple">contact.anasysdev@gmail.com</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
