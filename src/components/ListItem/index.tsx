import React from "react";

import FullHeart from "../../assets/ful-heart.svg";
import Heart from "../../assets/heart.svg";
import { Cat } from "../../types/Cats";
import {
  ContainerListItem,
  ItemImage,
  ItemText,
  ItemDetails,
  ItemLabel,
  ItemLike,
} from "./styles";

interface IListItem {
  cat?: Cat;
  action: () => void;
}

const ListItem = ({ cat, action }: IListItem) => {
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
      <ItemLike onPress={action}>
        <Heart fill="#fff" />
      </ItemLike>
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
