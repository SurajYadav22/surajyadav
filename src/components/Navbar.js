// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// // import logo from "../Assets/logo.png";
// import logo from "../Assets/brandWhite.png";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/skill"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Skills
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Resume
//               </Nav.Link>
//             </Nav.Item>

//             {/* <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/blog"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Blogs
//               </Nav.Link>
//             </Nav.Item> */}

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 onClick={() => updateExpanded(false)}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

/* eslint-disable no-restricted-globals */

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo1.png";
import logo from "../Assets/sign.png";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { pathname } = useLocation();

  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };

  // console.log("scrollintoview", window);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // active class on scroll and click event on navbar items
  const li = document.querySelectorAll(".nav-link");
  const section = document.querySelectorAll(".activeNavlink");
  function acvtiveMenu() {
    let len = section.length;
    for (let i = 0; i < len; i++) {
      let sectionTop = section[i].offsetTop;
      let sectionHeight = section[i].offsetHeight;
      let variableHeight = sectionHeight / 4;

      if (pageYOffset > sectionTop - sectionHeight / 3 + variableHeight) {
        li.forEach((li) => {
          li.classList.remove("active");
        });
        li[i].classList.add("active");
      }
    }
  }
  acvtiveMenu();
  window.addEventListener("scroll", acvtiveMenu);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollHome")}>
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollAbout")}>
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollSkills")}>
                <span>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollProjects")}>
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollResume")}>
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToFunction("scrollContact")}>
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
