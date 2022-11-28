import React from "react";

import Arrow from "../../assets/arrow.svg";
import { HeaderTitle, ContainerHeader, HeaderButton } from "./styles";

interface IHomeHeader {
  goTo: () => void;
}

const FavoriteHeader = ({ goTo }: IHomeHeader) => {
  return (
    <ContainerHeader>
      <HeaderButton onPress={goTo}>
        <Arrow fill="#fff" />
      </HeaderButton>
      <HeaderTitle>Voltar</HeaderTitle>
    </ContainerHeader>
  );
};

export { FavoriteHeader };
