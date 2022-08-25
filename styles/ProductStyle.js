import styled from "styled-components";

export const ProductStyle = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    cursor: pointer;
  }
  h2 {
    padding: 0.2rem 0rem;
  }
`;
