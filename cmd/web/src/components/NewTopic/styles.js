import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  aside {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;

    padding: 1rem 1.25rem;

    border-right: 2px solid var(--divider-background);

    button {
      padding: 0.25rem 0.5rem;
      border-radius: 0.4rem;
    }

    label img,
    button img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.65rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  padding: 0;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid var(--secondary-color);
  }
  small {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const FilePicker = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    cursor: pointer;

    border-radius: 0.4rem;
    transition: background-color 0.2s;
    margin: 0.625rem 0;

    &:hover {
      background-color: var(--gray-light);
    }
  }
`;

export const Form = styled.form`
  fieldset {
    border: none;
    padding: 1.5rem 0 1rem;

    header {
      display: flex;
      justify-content: space-between;
      padding: 0 1.5rem 0.5rem;

      border-bottom: 2px solid var(--divider-background);
    }

    input {
      font-size: 1.5rem;
      font-weight: 600;
      display: block;
      padding-left: 0.25rem;
      width: 24rem;
    }

    main {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1.25rem;
    }

    textarea {
      resize: none;
      padding: 1rem;
      font-family: Inter;
      font-weight: 400;
      overflow-y: auto;
      border-radius: 0.5rem;

      width: 100%;

      border: 2px solid var(--divider-background);

      margin-right: 1rem;
    }

    div {
      display: flex;
      align-items: center;

      img {
        max-height: 15rem;
        max-width: 20rem;
        height: 15rem;
        border-radius: 1rem;
      }
    }
  }
`;
