import styled from "styled-components";

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
    height: 110px;
    width: 190px;
    border-radius: 2rem;
  }

  .navbar {
    display: none;
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
