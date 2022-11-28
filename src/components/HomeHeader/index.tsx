import React from "react";

import Arrow from "../../assets/arrow2.svg";
import {
  HeaderTitle,
  HeaderButtonText,
  ContainerHeader,
  HeaderButton,
  PressButton,
} from "./styles";

interface IHomeHeader {
  goTo: () => void;
}

const HomeHeader = ({ goTo }: IHomeHeader) => {
  return (
    <ContainerHeader>
      <HeaderTitle>Meus gatos ❤️</HeaderTitle>
      <HeaderButton>
        <HeaderButtonText>Favoritos</HeaderButtonText>
        <PressButton onPress={goTo}>
          <Arrow fill="#fff" />
        </PressButton>
      </HeaderButton>
    </ContainerHeader>
  );
};

export { HomeHeader };
