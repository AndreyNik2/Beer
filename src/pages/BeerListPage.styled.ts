import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  min-height: 10px;
`;

export const DeleteButton = styled.button`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #ff4a03;
  color: #ffffff;
  border-radius: 10px;
  outline: 0;
  border: 0;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 0px #000000;
    box-shadow: 5px 5px 15px 0px #000000;
    transition: 0.3s;
  }
`;
