import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import MyModal from "./Modal";
import Callme from "./Callme";
import { IoCall } from "react-icons/io5";

const ContectLogo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  return (
    <>
      <span>
        <ul className="home-about-social-linksTwo">
          <li className="social-iconsTwo">
            <a
              href="https://github.com/SurajYadav22"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://www.linkedin.com/in/dev-suraj/"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo  home-social-iconsTwo"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-iconsTwo">
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
            <span
              onClick={() => setModalShow(true)}
              className="icon-colourTwo home-social-iconsTwo"
            >
              <CgMail />
            </span>
          </li>
          <li className="social-iconsTwo">
            <Callme show={callme} onHide={() => setCallme(false)} />
            <span
              onClick={() => setCallme(true)}
              className="icon-colourTwo home-social-iconsTwo"
            >
              <IoCall />
            </span>
          </li>
          <li className="social-iconsTwo">
            <a
              href="https://surajyadav1.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              className="icon-colourTwo home-social-iconsTwo"
            >
              <SiHashnode />
            </a>
          </li>
        </ul>
      </span>
    </>
  );
};

export default ContectLogo;
