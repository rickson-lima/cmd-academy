import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 49%;
  align-items: "center";
  background-color: var(--background-light);
  border-radius: 1rem;
  margin-bottom: 1rem;

  div {
    padding: 1rem 2rem;
  }

  & > div:nth-of-type(1) {
    border-right: 3px solid var(--gray-light);

    img {
      width: 5rem; /* 80px */
      height: 5rem; /* 80px */
      border-radius: 50%;
      border: 2px solid var(--secondary-color);
    }
  }
}
`;

export const Container = styled.div`
  display: block;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 0;
  }
`;
