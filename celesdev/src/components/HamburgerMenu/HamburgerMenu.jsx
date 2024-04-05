import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  ContainerHamburgerMenuStyled,
  LinkHamburguerStyled,
} from "./HamburgerMenuStyles";

const HamburgerMenu = () => {
  return (
    <>
      <AnimatePresence>
        <ContainerHamburgerMenuStyled
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 1 }}
        >
          <LinkHamburguerStyled to="/Projects">Projects</LinkHamburguerStyled>
          <LinkHamburguerStyled to="/Social">Social</LinkHamburguerStyled>
        </ContainerHamburgerMenuStyled>
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
