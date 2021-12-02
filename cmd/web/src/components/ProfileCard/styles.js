import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: "center";
  background-color: var(--background-light);
  border-radius: 1rem;
  margin-bottom: 1rem;
}
`;

export const LeftCol = styled.div`
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  border-right: 3px solid var(--gray-light);
  padding: 1.5rem 3rem;

  & > img {
    width: 8rem; /* 80px */
    height: 8rem; /* 80px */
    border-radius: 50%;
    border: 2px solid var(--secondary-color);
  }

  button {
    border-radius: 0.25rem;
    padding: 0.4rem 1rem;
    justify-content: flex-start;
    color: var(--text-gray);
    font-size: 1rem;
    width: 100%;

    img {
      width: 1.25rem;
      margin-right: 0.5rem;
    }
  }
`;

export const RightCol = styled.div`
  padding: 1.5rem 2rem;
  width: 100%;

  h4,
  h3 {
    color: var(--primary-color);
  }

  h2 {
    margin-bottom: 0.25rem;
  }

  div {
    margin-top: 1rem;
  }
`;
