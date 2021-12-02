import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 25rem;
  background: #fff;
  padding: 1.5rem 2rem;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 6.25rem;
    margin: 0.625rem 0 2.5rem;
  }

  p {
    color: #ff3333;
    margin-bottom: 0.9rem;
    border: 2px solid #ff3333;
    border-radius: 0.25rem;
    padding: 0.625rem;
    width: 100%;
    text-align: center;
  }

  input {
    height: 3rem;
    margin-bottom: 1.25rem;
    padding: 0 1.25rem;
    border-radius: 0.25rem;
    color: var(--text-dark);
    font-size: 1.15rem;
    width: 100%;
    border: 2px solid var(--primary-color);
    &::placeholder {
      color: #999;
    }
  }

  button {
    font-weight: 600;
    font-size: 1.25rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    width: 100%;
    cursor: pointer;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--primary-color);
    }
  }
`;
