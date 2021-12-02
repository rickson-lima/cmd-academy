import React from "react";
import { Container } from "./styles";

function Header() {
  return (
    <Container className="drop-shadow">
      <h2>{document.title.split(" ")[0]}</h2>
      <input type="search" placeholder="Pesquisar..." name="search" />
    </Container>
  );
}

export default Header;
