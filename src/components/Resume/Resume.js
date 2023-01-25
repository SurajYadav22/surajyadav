import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle2 from "../Particle2";
import Resumecontent from "./ResumeContent";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";

const resume =
  "https://drive.google.com/file/d/1vqdHZ96g2kFve0FVawr9AyQNwmIaHxqm/view";

function Resume() {
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      <Particle2 />
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={resume} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-title">Trainee</h3>
              <Resumecontent
                title="Full Stack Web Developer [Masai School Bengaluru, Karnataka]"
                content={[
                  "March 2022 (Present)",
                  "1200 hours of hands - on coding.",
                  "1000 hours for DSA.",
                  "100 hours for soft skills development.",
                  "3 collaborative projects.",
                  "25+ mini-projects",
                ]}
              />

              <h3 className="resume-title">Certifications</h3>
              <Resumecontent
                title=""
                content={[
                  <a
                    href="https://drive.google.com/file/d/17hLaAXLqDvyy-2sIxxAd-7IruOWw4PfO/view?usp=share_link"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      rel: "noopener noreferrer",
                    }}
                  >
                    Training on Advance Java (SoftPro India Pvt. Ltd.)
                    <BiLinkExternal />
                  </a>,
                ]}
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
              <Resumecontent
                title="Dr. Ram Manohar Lohia Avadh University, Ayodhya Uttar Pradesh"
                content={["2019 - 2022", `Bachelor of Arts`]}
              />
              <Resumecontent
                title="Government Polytechnic Jaunpur Uttar Pradesh (BTEUP)"
                content={[
                  "2019 - 2021",
                  "Diploma in Computer Science and Engineering",
                ]}
              />

              <Resumecontent
                title="Gram Vikas Inter College Khuthan Jaunpur Uttar Pradesh"
                content={[
                  "Intermediate [PCM] (2018 - 2019)",
                  "High School (2016 - 2017)",
                ]}
              />
              {/* <h3 className="resume-title">ACHIEVEMENTS</h3>
              <Resumecontent
                title=""
                content={[
                  "Getting started with python LinkedIn Skill Assessment badge.",
                  "LinkedIn Skill Assessment badge in CSS, JavaScript, Git, Bash, Node.js, and MongoDB.",
                ]}
              /> */}
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={resume} target="_blank">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
