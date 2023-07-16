import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #ff4a03;
  color: #ffffff;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 0px #000000;
    box-shadow: 5px 5px 15px 0px #000000;
    transition: 0.3s;
  }
`;

export const Header = styled.header`
    border-bottom: 1px solid #222222;
`

export const Nav = styled.nav`
    margin-bottom: 30px;
`