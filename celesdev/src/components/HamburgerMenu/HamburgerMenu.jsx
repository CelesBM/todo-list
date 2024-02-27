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
          <p>Projects</p>
          <p>Social</p>
        </ContainerHamburgerMenuStyled>
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
