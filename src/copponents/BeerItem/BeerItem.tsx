import { FC } from "react";
import {
  CheckImg,
  DescrContainer,
  Img,
  ImgContainer,
  ItemLink,
  ItemTitle,
  LinkContainer,
  ListItem,
} from "./BeerItem.styld";
import checkIcon from "../../images/check.svg";
import { IBeer } from "../../models/IBeer";
import { useBeerStore } from "../../zustand/store";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

type Props = {
  beer: IBeer;
  onHandleRightClick: (id: string) => void;
};

export const BeerItem: FC<Props> = ({ beer, onHandleRightClick }) => {
  const selectedBeer = useBeerStore((state) => state.selectedBeer);
  const location = useLocation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  })

  return (
    <ListItem
      ref={ref}
      key={beer.id}
      onContextMenu={(e) => {
        e.preventDefault();
        onHandleRightClick(beer.id);
      }}
    >
      {inView && (
        <>
          <ItemLink to={`beer/${beer.id}`} state={{ from: location }}>
            <ItemTitle>{beer.name}</ItemTitle>
            <LinkContainer>
              <ImgContainer>
                <Img src={beer.image_url} alt={beer.name} />
              </ImgContainer>
              <DescrContainer>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
              </DescrContainer>
            </LinkContainer>
          </ItemLink>
          {selectedBeer.filter((i) => i === beer.id).length > 0 && (
            <CheckImg>
              <img src={checkIcon} alt="Check icon" height={50} />
            </CheckImg>
          )}
        </>
      )}
    </ListItem>
  );
};
