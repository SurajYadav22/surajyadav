import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              <span className="purple">“About me” </span>
            </h1>
            <p className="home-about-body">
              <span className="myabout first-about">
                Hello, I am Suraj Yadav, Full Stack Web Developer. I'm from
                Jaunpur, Uttar Pradesh, India. I have a passion for coding and
                get most enjoyment from solving problems by writing elegant
                code.
              </span>
              <br />
              <br />
              <span className="myabout second-about">
                I enjoy taking challenges and giving my best. My interest lies
                in problem-solving and software development. I am a constant
                learner and I like interacting with people. I spend my whole
                day, practically every day, experimenting with HTML, CSS, and
                modern Javascript libraries like React, and Redux. I build
                websites that are delightful and informative.
              </span>
              <br />
              <br />
              <span className="myabout third-about">
                I'm curious to explore different industry-standard tech stacks
                and environments. Skilled in the MERN stack and willing to start
                a career with an organization that provides an opportunity to
                improve skills and knowledge gained as well as to grow along
                with the organization’s goal.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About2;
