import styled from "styled-components/native";

export const ContainerPaginator = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  width: 100%;
`;
export const ContainerPaginatorButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 45px;
  height: 45px;
  border-radius: 16px;
  margin: 6px;
  justify-content: center;
  align-items: center;
`;
export const ContainerPaginatorPage = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 45px;
  height: 45px;
  border-radius: 16px;
  margin: 6px;
  justify-content: center;
  align-items: center;
`;

export const ContainerPaginatorButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREY};
  font-size: 16px;
  font-weight: bold;
`;
