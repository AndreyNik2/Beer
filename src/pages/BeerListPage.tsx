import { FC, useEffect } from "react";
import { useBeerStore } from "../zustand/store";
import { BeerItem } from "../copponents/BeerItem/BeerItem";
import {
  ContainerStyled,
  DeleteButton,
  List,
} from "./BeerListPage.styled";


export const BeerListPage: FC = () => {
  const fetchBeer = useBeerStore((state) => state.fetchBeer);
  const beer = useBeerStore((state) => state.beer);
  const selectBeer = useBeerStore((state) => state.selectBeer);
  const selectedBeer = useBeerStore((state) => state.selectedBeer);
  const removeBeer = useBeerStore((state) => state.removeBeer);

  const onHandleRightClick = (id: string) => {
    selectBeer(id);
    console.log(id);
  };

  useEffect(() => {
    fetchBeer();
  }, [fetchBeer]);

  useEffect(() => {
    if (beer.length === 0) {
      fetchBeer();
    }
  }, [beer, fetchBeer]);

  return (
    <ContainerStyled>
      <h2>Beer list</h2>
      {selectedBeer.length > 0 && (
        <DeleteButton onClick={() => removeBeer()}>Delete</DeleteButton>
      )}
      <List>
        {beer &&
          beer.slice(0, 15).map((beer) => {
            return (
              <BeerItem
                onHandleRightClick={onHandleRightClick}
                beer={beer}
                key={beer.id}
              />
            );
          })}
      </List>
    </ContainerStyled>
  );
};
