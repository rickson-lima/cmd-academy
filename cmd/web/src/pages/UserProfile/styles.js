import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-dark);
  max-width: 1444px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto 1fr;

  gap: 2rem;

  padding: 1.25rem 1rem;
`;

export const UsersContainer = styled.div`
  display: block;
`;
