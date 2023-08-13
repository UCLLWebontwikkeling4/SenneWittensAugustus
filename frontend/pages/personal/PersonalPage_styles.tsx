import styled from "styled-components";

export const InfoPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 10%;
  & > * {
    flex: 1;
  }
`;


export const Item = styled.div`
  width: calc(50% - 10px);
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;
