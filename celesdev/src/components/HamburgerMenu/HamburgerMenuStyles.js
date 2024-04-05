import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ContainerHamburgerMenuStyled = styled(motion.div)`
  background-color: #1d1d1d;
  width: 100%;
  position: absolute;
  top: 90px;
  right: 0px;
  padding: 30px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkHamburguerContainerStyled = styled.div``;

export const LinkHamburguerStyled = styled(Link)`
  cursor: pointer;
  color: #00c5e4;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-shadow: 2px 2px 2px #af7135;
  }
`;
