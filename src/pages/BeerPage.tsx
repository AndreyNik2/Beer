import { FC, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { IBeer } from "../models/IBeer";
import { fetchBeerById } from "../services/api/ApiBeer";
import { ContainerStyled, DescrContainer, Img, ImgContainer } from "./BeerPage.styled";

export const BeerPage: FC = () => {
  const location = useLocation();
  const { beerID } = useParams();
  const [beerDeteils, setBeerDetails] = useState<null | IBeer[]>(null);

  console.log(beerID);

  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    async function fetchData() {
      if (beerID) {
        try {
          const response = await fetchBeerById(beerID);
          console.log(response);
          setBeerDetails(response);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [beerID]);

  if (!beerID) {
    return null;
  }

  const makeIngradients = (beerDeteils: IBeer) => {
    const hops = beerDeteils.ingredients.hops.map((i) => i.name).join(", ");
    const malt = beerDeteils.ingredients.malt.map((i) => i.name).join(", ");
    return `Ingredients: Malt: (${hops}), Hops: (${malt}) Yests: ${beerDeteils.ingredients.yeast}`;
  };

  return (
    <div>
      {beerDeteils && (
        <ContainerStyled>
          <ImgContainer>
            <Img
              src={beerDeteils[0].image_url}
              alt={beerDeteils[0].name}
            />
          </ImgContainer>
          <DescrContainer>
            <p>{beerDeteils[0].name}</p>
            <p>{makeIngradients(beerDeteils[0])}</p>
            <p>{beerDeteils[0].description}</p>
            <p>`Brewers tips: {beerDeteils[0].brewers_tips}`</p>
          </DescrContainer>
        </ContainerStyled>
      )}
    </div>
  );
};
