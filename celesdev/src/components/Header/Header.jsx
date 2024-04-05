import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, setScrollTop } from "../../redux/MenuSlice";
import { motion } from "framer-motion";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  HeaderContainerStyled,
  HamburgerIconStyled,
  ContainerLinksStyled,
  LinkHeaderStyled,
  SpanStyled,
} from "./HeaderStyles";
import { CiBoxList } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleMenu = () => {
    dispatch(toggleMenu(), setScrollTop());
  };
  return (
    <>
      <HeaderContainerStyled>
        <LinkHeaderStyled to="/Home">
          <img src="logo-celesdev.png" alt="logo" class="logo" />{" "}
        </LinkHeaderStyled>
        <ContainerLinksStyled>
          <LinkHeaderStyled to="/Projects">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Projects</SpanStyled>
            </motion.div>
          </LinkHeaderStyled>
          <LinkHeaderStyled to="/Social">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Social</SpanStyled>
            </motion.div>
          </LinkHeaderStyled>
        </ContainerLinksStyled>
        <HamburgerIconStyled onClick={handleMenu}>
          <motion.div whileTap={{ scale: 1.2 }}>
            <CiBoxList />
          </motion.div>
        </HamburgerIconStyled>
        {isMenuOpen && <HamburgerMenu />}
      </HeaderContainerStyled>
    </>
  );
};

export default Header;

/*import React, { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, setScrollTop } from "../../redux/MenuSlice";
import { motion } from "framer-motion";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import {
  HeaderContainerStyled,
  HamburgerIconStyled,
  ContainerLinksStyled,
  LinkHeaderStyled,
  SpanStyled,
} from "./HeaderStyles";

import { CiBoxList } from "react-icons/ci";

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const handleMenu = () => {
    dispatch(toggleMenu(), setScrollTop());
  };

  return (
    <>
      <HeaderContainerStyled>
        <LinkHeaderStyled to="/Home">
          <img src="logo-celesdev.png" alt="logo" class="logo" />{" "}
        </LinkHeaderStyled>
        <ContainerLinksStyled>
          <LinkHeaderStyled to="/Projects">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Projects</SpanStyled>
            </motion.div>
          </LinkHeaderStyled>
          <LinkHeaderStyled to="/Social">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
              <SpanStyled>Social</SpanStyled>
            </motion.div>
          </LinkHeaderStyled>
        </ContainerLinksStyled>

        <HamburgerIconStyled onClick={handleMenu}>
          <motion.div whileTap={{ scale: 1.2 }}>
            <CiBoxList />
          </motion.div>
        </HamburgerIconStyled>
        {isMenuOpen && <HamburgerMenu />}
      </HeaderContainerStyled>
    </>
  );
};

export default Header;*/
