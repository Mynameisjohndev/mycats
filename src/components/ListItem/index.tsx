import React from "react";

import { Cat } from "../../types/Cats";
import {
  ContainerListItem,
  ItemImage,
  ItemText,
  ItemDetails,
  ItemLabel,
} from "./styles";

interface IListItem {
  action?: () => void;
  cat?: Cat;
}

export const CARD_HEIGHT = 600;

const ListItem = ({ action, cat }: IListItem) => {
  const { id, image, name, temperament, description } = cat;
  return (
    <ContainerListItem>
      <ItemImage
        source={{
          uri: `${
            image === undefined
              ? "https://static.thenounproject.com/png/6725-200.png"
              : image.url
          }`,
        }}
      />
      <ItemDetails>
        <ItemText>
          <ItemLabel>Breed: </ItemLabel> {name}
        </ItemText>
        <ItemText>
          <ItemLabel>Description: </ItemLabel>{" "}
          {description.length > 133
            ? `${description.slice(0, 133)}...`
            : description}
        </ItemText>
      </ItemDetails>
    </ContainerListItem>
  );
};

export default ListItem;
