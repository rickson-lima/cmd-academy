import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  padding: 3rem 2rem;
`;

export const LeftContainer = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
`;

export const LogoContainer = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-items: center;
  align-content: center;
  gap: 3.5rem;

  p {
    font-size: 3.25rem;
    text-align: center;
    color: var(--secondary-color);
    max-width: 500px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    width: 11.5rem;
    height: 4rem;

    font-size: 1.375rem;
    font-weight: 600;
    border-radius: 0.5rem;
    margin: 0 1rem;
    text-decoration: none;
  }
`;

export const RightContainer = styled.div`
  display: grid;
  justify-content: center;

  width: 100%;

  img {
    width: 35rem;
    height: 27.5rem;
  }

  p {
    display: grid;
    justify-items: center;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: Rajdhani;
    color: var(--secondary-color);
  }

  p img {
    width: 2rem;
    height: 2rem;
  }
`;
