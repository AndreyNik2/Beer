import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

export const ListItem = styled.li`
  width: calc((100% - 90px) / 2);

  background-color: #825429;
  padding: 15px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 500px;
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #111111;
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

export const Img = styled.img`
/* height: 100%; */
  @media screen and (min-width: 768px) {
    /* max-width: 200px;
    max-height: 300px; */
    height:300px
  }
  @media screen and (min-width: 1440px) {
    height: 400px;
    /* max-width: 300px;
    max-height: 450px; */
  }
`;
export const DescrContainer = styled.div`
  padding: 20px;
`;

export const CheckImg = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
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

export const ItemTitle = styled.h3`
  margin-top: 0;
  padding: 0;
`;
