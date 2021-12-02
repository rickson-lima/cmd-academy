import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Hero from "../../assets/hero.png";
import BlueHandshake from "../../assets/handshake-light-blue.svg";

import styles from "../../styles/components/Button.module.css";

import {
  Container,
  LogoContainer,
  ButtonsContainer,
  RightContainer,
  LeftContainer,
} from "./styles";
import api from "../../services/api";

function Welcome() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    document.title = "Bem-vindo | CMD Academy";
    handleTotalConnections();
  }, []);

  const handleTotalConnections = async () => {
    try {
      const response = await api.get("/users/count");
      setTotalConnections(response.data.count);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <img src={Logo} alt="CMD Academy Logo" />
          <p>Sua plataforma de networking digital</p>
        </LogoContainer>

        <ButtonsContainer>
          <Link
            to="/signin"
            className={`${styles["primary-container"]} button`}
          >
            Entrar
          </Link>
          <Link
            to="/signup"
            className={`${styles["secondary-container"]} button`}
          >
            Cadastrar
          </Link>
        </ButtonsContainer>
      </LeftContainer>

      <RightContainer>
        <img src={Hero} alt="Hero" />
        <p>
          Total de {totalConnections} pessoas conectadas
          <img src={BlueHandshake} alt="Aperto de mão" />
        </p>
      </RightContainer>
    </Container>
  );
}

export default withRouter(Welcome);
