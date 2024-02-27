import React, { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, setScrollTop } from "../../redux/MenuSlice";
import { motion } from "framer-motion";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
//import { motion } from "framer-motion";
import { HeaderContainerStyled, HamburgerIconStyled } from "./HeaderStyles";

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
        <img src="logo-celesdev.png" alt="logo" class="logo" />

        <nav class="navbar">
          <ul class="navbar__ul">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Social</a>
            </li>
          </ul>
        </nav>

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
