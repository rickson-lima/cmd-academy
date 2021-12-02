import styled from "styled-components";

export const Sidenav = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 1.25rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding: 1.25rem;
  background-color: var(--background-light);

  max-width: 15rem;
  height: calc(100vh - 2.5rem);

  border-radius: 1rem;

  img {
    width: 6.5rem;
  }

  ul {
    list-style: none;

    .current-page {
      background: var(--blue-gradient);
      border: 2px solid var(--secondary-color);
      color: var(--text-light);
    }
  }

  a {
    margin-bottom: 0.35rem;
  }

  a,
  button {
    display: flex;
    align-items: center;
    padding: 0.5rem 1.25rem;

    border: 2px solid var(--background-light);
    color: var(--color-text);
    border-radius: 0.625rem;
    cursor: pointer;
    text-decoration: none;

    font-size: 1.25rem;

    background-color: var(--background-light);

    &:hover {
      background-color: var(--gray-light);
      transition: background-color 0.3s;
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem !important;
    }
  }
`;

export const UserOptions = styled.div`
  display: grid;

  a {
    margin: 0;
  }
  }
`;
