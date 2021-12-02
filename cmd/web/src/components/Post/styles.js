import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-light);

  display: grid;
  grid-template-columns: 7.5rem 1fr auto;
  border-radius: 1rem;

  margin-bottom: 1.25rem;

  span {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const LeftContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: space-around;

  border-right: 2px solid var(--divider-background);

  span {
    font-size: 0.8rem;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid var(--secondary-color);
  }

  small:nth-of-type(1) {
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0.25rem 0;
  }

  small:nth-of-type(1) {
    color: var(--text-dark);
  }

  small:nth-of-type(2) {
    color: var(--primary-color);
  }
`;

export const CenterContainer = styled.div`
  padding: 1.5rem 1.25rem;

  article {
    display: grid;
    height: 100%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: var(--text-dark);
    font-size: 1.3rem;
  }

  p {
    padding: 1rem 0 1.5rem;
  }

  footer {
    display: flex;
    align-items: center;

    div {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    div:nth-of-type(1) {
      margin-right: 1.5rem;
    }

    div img {
      margin-right: 0.5rem;
      width: 1.8rem;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 1rem 1rem 1rem 0;
    border-radius: 1rem;
    max-width: 10.5rem; /* 168px */
    max-height: 15rem; /* 240px */
    cursor: pointer;
  }
`;
