import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainerStyled = styled.header`
  background-color: #1d1d1d;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  border-bottom: solid 0.1rem #af7135;

  img {
    height: 70px;
    width: 170px;
    border-radius: 2rem;
  }
`;

export const ContainerLinksStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 0px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkHeaderStyled = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const SpanStyled = styled.div`
  cursor: pointer;
  color: #00c5e4;
  font-size: 16px;
  font-weight: bold;

  @media (min-width: 1010px) {
    font-size: 18px;
  }

  &:hover {
    text-shadow: 2px 2px 2px #af7135;
  }
`;

export const HamburgerIconStyled = styled.div`
  cursor: pointer;
  color: #00c5e4;
  font-size: 30px;
  margin: 10px 20px 0px 0px;

  @media (min-width: 768px) {
    display: none;
  }
`;
