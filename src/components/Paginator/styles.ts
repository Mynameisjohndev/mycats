import styled from "styled-components/native";

export const ContainerPaginator = styled.View`
  border-radius: 16px;
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContainerPaginatorButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin: 6px;
  justify-content: center;
  align-items: center;
`;
export const ContainerPaginatorPage = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin: 6px;
  justify-content: center;
  align-items: center;
`;

export const ContainerPaginatorButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 22px;
  font-weight: bold;
`;
