import {  ReactNode } from "react";
import { ContainerStyled } from "./Container.styled";

type Prop = {
    children: ReactNode
}

export const Container = ({ children }: Prop) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
