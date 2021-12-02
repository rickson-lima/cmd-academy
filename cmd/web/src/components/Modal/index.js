import React from "react";

import { Container, Overlay } from "./styles";

export default function Modal(props) {
  return (
    <Overlay>
      <Container>
        <span className="close" onClick={() => props.closeModal(false)}>
          X
        </span>
        {props.children}
      </Container>
    </Overlay>
  );
}
