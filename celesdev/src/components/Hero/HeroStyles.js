import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeroStyled = styled.div`
  padding: 30px;
  margin-top: 100px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h5 {
    color: #00c5e4;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  @media (min-width: 400px) {
    h5 {
      font-size: 26px;
    }
  }

  @media (min-width: 550px) {
    h5 {
      font-size: 28px;
    }
  }

  @media (min-width: 900px) {
    h5 {
      font-size: 30px;
    }
  }

  @media (min-width: 1010px) {
    h5 {
      font-size: 34px;
    }
  }
`;

export const ContainerAboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 1010px) {
    flex-direction: row;
    margin-top: 50px;
  }

  @media (min-width: 1080px) {
    padding: 0px 50px;
    margin-right: 50px;
  }

  @media (min-width: 1285px) {
    margin-right: 80px;
  }

  @media (min-width: 1350px) {
    margin-top: 80px;
    margin-right: 120px;
  }

  p {
    color: white;
    font-size: 15px;
    line-height: 20px;
    text-align: justify;
  }

  @media (min-width: 400px) {
    p {
      font-size: 17px;
    }
  }

  @media (min-width: 450px) {
    p {
      padding: 0px 20px;
    }
  }

  @media (min-width: 550px) {
    p {
      font-size: 18px;
      line-height: 24px;
      padding: 0px 30px;
    }
  }

  @media (min-width: 768px) {
    p {
      line-height: 27px;
      padding: 0px 50px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 20px;
      line-height: 26px;
    }
  }

  @media (min-width: 1010px) {
    p {
      width: 60%;
    }
  }
  @media (min-width: 1080px) {
    p {
      width: 65%;
      line-height: 30px;
    }
  }

  @media (min-width: 1285px) {
    p {
      font-size: 22px;
      line-height: 35px;
    }
  }

  img {
    width: 130px;
    height: 160px;
    border-radius: 70px;
  }

  @media (min-width: 400px) {
    img {
      width: 140px;
      height: 170px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 160px;
      height: 190px;
    }
  }

  @media (min-width: 900px) {
    img {
      width: 170px;
      height: 210px;
    }
  }

  @media (min-width: 1010px) {
    img {
      width: 240px;
      height: 300px;
    }
  }

  @media (min-width: 1080px) {
    img {
      width: 280px;
      height: 340px;
    }
  }
`;

export const ContainerSkillsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 70px;
  }

  h4 {
    color: #00c5e4;
    font-weight: bold;
    font-size: 24px;
  }

  @media (min-width: 400px) {
    h4 {
      font-size: 26px;
    }
  }

  @media (min-width: 550px) {
    h4 {
      font-size: 28px;
    }
  }

  @media (min-width: 900px) {
    h4 {
      font-size: 30px;
    }
  }

  @media (min-width: 1010px) {
    h4 {
      font-size: 34px;
      margin: 50px 0px;
    }
  }
`;

export const SkillsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 1010px) {
    gap: 70px;
  }

  img {
    width: 60px;
  }

  @media (min-width: 768px) {
    img {
      width: 70px;
    }
  }

  @media (min-width: 1010px) {
    img {
      width: 80px;
    }
  }
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 60px;

  @media (min-width: 450px) {
    gap: 20px;
  }

  @media (min-width: 550px) {
    gap: 30px;
  }

  @media (min-width: 550px) {
    gap: 50px;
  }

  @media (min-width: 900px) {
    margin-top: 70px;
    gap: 80px;
  }

  @media (min-width: 1010px) {
    margin-top: 120px;
    gap: 90px;
  }
`;

export const ButtonStyled = styled.button`
  font-size: 15px;
  border-radius: 1rem;
  width: 130px;
  padding: 8px 0px;
  border: solid black;
  font-weight: bold;
  cursor: pointer;
  background-color: #00c5e4; /* Color de fondo para el segundo botón */

  @media (min-width: 400px) {
    font-size: 17px;
    width: 150px;
  }

  @media (min-width: 550px) {
    font-size: 18px;
    width: 170px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    width: 190px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    width: 220px;
  }

  @media (min-width: 1010px) {
    width: 280px;
    padding: 15px;
  }
`;

export const ButtonLinkStyled = styled(Link)`
  font-size: 15px;
  border-radius: 1rem;
  width: 130px;
  padding: 8px 0px;
  border: solid black;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: black;
  text-align: center;

  background: rgb(198, 112, 30);
  background: linear-gradient(
    90deg,
    rgba(198, 112, 30, 1) 0%,
    rgba(175, 113, 53, 1) 46%,
    rgba(139, 134, 95, 1) 64%,
    rgba(0, 212, 255, 1) 100%
  );

  @media (min-width: 400px) {
    font-size: 17px;
    width: 150px;
  }

  @media (min-width: 550px) {
    font-size: 18px;
    width: 170px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    width: 190px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    width: 220px;
  }

  @media (min-width: 1010px) {
    width: 280px;
    padding: 15px;
  }
`;
