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

export const FormContainer = styled.section`
  min-height: calc(100vh - 2.5rem);
  background-color: var(--background-light);
  border-radius: 1rem;
  padding: 2rem 0;
`;

export const Form = styled.form`
  fieldset {
    border: none;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;

    button {
      margin-top: 1.5rem;
    }
  }
`;

export const InputGroup = styled.div`
  margin: 0.5rem 0;
  width: 100%;

  label {
    font-size: 1.2rem;
    color: var(--secondary-color);
  }

  p {
    font-size: 0.8rem;
  }

  input,
  textarea {
    border: 1px solid var(--text-dark);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 1.15rem;
    margin: 0.15rem 0;
    width: 100%;

    &:focus {
      border-color: var(--secondary-color);
    }
  }

  textarea {
    resize: vertical;
    max-height: 10rem;
    min-height: 4rem;
    font-size: 1rem;
  }
`;

export const ProfilePicture = styled.aside`
  display: flex;
  flex-direction: column;

  img {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    display: block;
    margin: 1rem 0;
  }
  button {
    height: 2.5rem;
  }
`;
