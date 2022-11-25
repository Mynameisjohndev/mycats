import React from "react";

import {
  HeaderTitle,
  HeaderButtonText,
  ContainerHeader,
  HeaderButton,
} from "./styles";

const Header = () => {
  return (
    <ContainerHeader>
      <HeaderTitle>Meus gatos ❤️</HeaderTitle>
      <HeaderButton>
        <HeaderButtonText>Favoritos</HeaderButtonText>
      </HeaderButton>
    </ContainerHeader>
  );
};

export { Header };
