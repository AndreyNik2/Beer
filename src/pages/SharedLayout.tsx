import { FC, Suspense } from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import { Container } from '../copponents/Container/Container';
import { Header, Nav, NavLinkStyled } from './SharedLayout.styled';


export const SharedLayout: FC = () => {
    return (
      <Container>
        <Header>
          <h1>Beer Store</h1>
          <Nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </Nav>
        </Header>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    );
}