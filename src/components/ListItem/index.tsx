import React, { useState } from "react";
import { Animated } from "react-native";

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
  action?: () => void;
  cat?: Cat;
  index: number;
}

export const CARD_HEIGHT = 600;

const ListItem = ({ action, cat, index }: IListItem) => {
  const { id, image, name, temperament, description } = cat;
  const [opacity] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(0));
  const [rotate] = useState(new Animated.Value(0));

  Animated.timing(opacity, {
    toValue: 1,
    useNativeDriver: true,
    delay: 20 * index,
  }).start();

  Animated.timing(scale, {
    toValue: 1,
    useNativeDriver: true,
    duration: 550,
  }).start();

  Animated.timing(rotate, {
    toValue: 10,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            scale,
          },
        ],
      }}
    >
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
    </Animated.View>
  );
};

export default ListItem;
