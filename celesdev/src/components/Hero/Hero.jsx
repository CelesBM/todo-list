import React from "react";
import {
  ContainerHeroStyled,
  ContainerAboutStyled,
  ContainerSkillsStyled,
  SkillsStyled,
  ContainerButtonStyled,
  ButtonStyled,
} from "./HeroStyles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <ContainerHeroStyled>
        <h5>Fullstack Web Developer</h5>
        <ContainerAboutStyled>
          <p>
            Hello! I am Celeste, a Full Stack programmer with a passion for
            creating functional and design-quality websites. In this space you
            will be able to learn a little about my skills and the projects I
            have worked on.
          </p>
          <img src="/cv.jpeg" alt="" />
        </ContainerAboutStyled>
        <ContainerSkillsStyled>
          <h4>Skills</h4>
          <SkillsStyled>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-256.png"
                alt="Javascript"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="React"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
                alt="Node"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"
                alt="HTML"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png"
                alt="CSS"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-256.png"
                alt="BOOSTRAP"
              />
            </motion.div>
          </SkillsStyled>
        </ContainerSkillsStyled>
        <ContainerButtonStyled>
          <ButtonStyled>My projects</ButtonStyled>

          <ButtonStyled>Download CV </ButtonStyled>
        </ContainerButtonStyled>
      </ContainerHeroStyled>
    </>
  );
};

export default Hero;
