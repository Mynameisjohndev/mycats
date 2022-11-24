import React from "react";

import {
  ContainerPaginator,
  ContainerPaginatorButton,
  ContainerPaginatorButtonText,
  ContainerPaginatorPage,
} from "./styles";

interface IPaginator {
  nextPage: () => void;
  lestPage: () => void;
  page: number;
}

const Paginator = ({ lestPage, nextPage, page }: IPaginator) => {
  return (
    <ContainerPaginator>
      <ContainerPaginatorButton onPress={lestPage}>
        <ContainerPaginatorButtonText> {"<"} </ContainerPaginatorButtonText>
      </ContainerPaginatorButton>
      <ContainerPaginatorPage>
        <ContainerPaginatorButtonText>{page}</ContainerPaginatorButtonText>
      </ContainerPaginatorPage>
      <ContainerPaginatorButton onPress={nextPage}>
        <ContainerPaginatorButtonText> {">"} </ContainerPaginatorButtonText>
      </ContainerPaginatorButton>
    </ContainerPaginator>
  );
};

export { Paginator };
