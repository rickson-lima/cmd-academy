import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: relative;
  top: 20%;
  background-color: var(--background-light);
  border-radius: 1.25rem;
  width: 60%;
  max-width: 900px;
  margin: 0 auto;

  .close {
    position: absolute;
    right: 2rem;
    top: 1rem;
    color: var(--color-text);
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0.25rem 0.625rem;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover,
    &:focus {
      background-color: var(--gray-light);
      color: var(--primary-color);
      cursor: pointer;
    }
  }
`;
