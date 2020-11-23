import styled from "styled-components";

export const Content = styled.div`
  .table {
    margin: 2.5vw 0;
    width: 100% !important;
    border-radius: 10px;
  }

  td,
  th {
    max-width: 15vw !important;
    padding: 10px 20px 5px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
