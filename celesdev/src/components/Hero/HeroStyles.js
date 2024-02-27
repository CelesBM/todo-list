import styled from "styled-components";

export const ContainerHeroStyled = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h5 {
    color: #00c5e4;
    font-weight: bold;
    font-size: 24px;
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
`;

export const ContainerAboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  p {
    color: white;
    font-size: 15px;
    line-height: 20px;
  }

  @media (min-width: 400px) {
    p {
      font-size: 17px;
    }
  }

  @media (min-width: 550px) {
    p {
      font-size: 18px;
      line-height: 22px;
    }
  }

  @media (min-width: 768px) {
    p {
      line-height: 25px;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 20px;
      line-height: 26px;
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
`;

export const SkillsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 60px;
  }

  @media (min-width: 768px) {
    img {
      width: 70px;
    }
  }
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;

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
`;

export const ButtonStyled = styled.button`
  font-size: 15px;
  border-radius: 1rem;
  width: 130px;
  padding: 8px 0px;
  border: solid black;
  font-weight: bold;
  cursor: pointer;

  /* Estilos para el primer botón */
  &:first-child {
    background: rgb(198, 112, 30);
    background: linear-gradient(
      90deg,
      rgba(198, 112, 30, 1) 0%,
      rgba(175, 113, 53, 1) 46%,
      rgba(139, 134, 95, 1) 64%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  /* Estilos para el segundo botón */
  &:last-child {
    background-color: #00c5e4; /* Color de fondo para el segundo botón */
  }

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
`;
