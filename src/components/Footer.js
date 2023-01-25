import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
      style={{ position: "relative", bottom: "0" }}
    >
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Suraj Yadav</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year}. All rights reserved</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SurajYadav22"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/SurajYastudent"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dev-suraj/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://surajyadav1.hashnode.dev/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiHashnode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
