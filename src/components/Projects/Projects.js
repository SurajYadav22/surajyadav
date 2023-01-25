import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle2 from "../Particle2";
// import Footer from "../Footer";

import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";

function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      <Particle2 />
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card first-blog">
              <ProjectCard
                imgPath={project5}
                isBlog={false}
                title="Boat lifestyle "
                tool=" React JS, Mongo DB, Express JS, Node JS, HTML, Styled-Components, Axios"
                description="This website is a clone of boat-lifestyle. This is an individual project. BoAt-lifestyle is an Indian e-commerce company. The sole aim of boAt company is to provide affordable, durable, and more importantly, 'fashionable' audio products and accessories to millennials. Here users can make their accont. The user can log in by email and password and after that, he can purchase our products. User can filter product list according to several parameters."
                link="https://github.com/SurajYadav22/boat-lifestyle-clone"
                demoLink="https://boatlifestyle-clone.netlify.app/"
              />
            </Col>

            <Col md={6} className="project-card first-blog">
              <ProjectCard
                imgPath={project4}
                isBlog={false}
                title="Netflix"
                tool=" React JS, Mongo DB, Express JS, Node JS, Firebase, TMDB API, HTML, Styled-Components"
                description="This website is a clone of netflix. This is an individual project. Netflix is a subscription-based streaming service that allows their members to watch TV shows and movies on an internet-connected device. It has a huge selection of movies and TV shows old and new, tons of high-quality original programs, and an easy-to-navigate interface."
                link="https://github.com/SurajYadav22/netflix-clone-MERN"
                demoLink="https://netflixbestclone.netlify.app/"
              />
            </Col>

            <Col md={6} className="project-card first-blog">
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title="OLX"
                tool=" HTML, CSS, JavaScript, React, Redux, React-redux, JSON SERVER, ChakraUI, React-Bootstrap "
                description="This website is a clone of olx.in, OLX is an online marketplace to buy and sell products locally. A person can buy and sell products and any user comes to my clone website then he can log in by his email or mobile number and after logging in he can sell a product and he also gets facility that he can see the products posted by others."
                link="https://github.com/shivraj32644/Olx-Clone"
                demoLink="https://olx-cloneone.netlify.app/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="cult.fit"
                tool=" HTML, CSS, JavaScript, JSON SERVER, Bootstrap "
                description="This is another clone of my previous project cult.fit. Cult.fit, is a health-tech platform offering digital and offline experiences across fitness, nutrition, and mental well-being, to build a holistic ecosystem of health, fitness, and healthcare. The user can log in by email and password and after that, he can purchase our products."
                link="https://github.com/Rajgupta7080/CultFit-Team"
                demoLink="https://stupendous-chebakia-31e667.netlify.app/"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={project3}
                isBlog={false}
                title="Revv"
                tool=" HTML, CSS, JavaScript "
                description="This website is a clone of revv.co.in, It is a platform where cars can rent at the cheapest price with the most flexible daily, weekly, and monthly car subscription plans and all these facilities are available on our website too, the user can log in by email and password and after that, he can rent the car according to his location and he also gets to see different types of cars and their prices here."
                link="https://github.com/yug0231/revvpro"
                demoLink="https://dazzling-pony-c55ac0.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Projects;
