import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    /* max-width: 808px; */
    padding: 0 20px;
  }

  @media (max-width: 425px) {
    /* max-width: 435px; */
    padding: 0 5px;
  }

  /* @media (max-width: 320px) {
    max-width: 435px;
    padding: 0 5px;
  } */
`;
