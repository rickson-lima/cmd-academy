import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  border-radius: 1.25rem;
  background-color: var(--background-light);

  margin-bottom: 1rem;

  h1 {
    font-weight: 500;
  }

  input {
    background-color: var(--search-input-background);
    color: var(--search-input-text);
    padding: 0.5rem;
    padding-left: 1.25em;
    font-size: 1rem;
    border-radius: 1rem;
  }
`;
