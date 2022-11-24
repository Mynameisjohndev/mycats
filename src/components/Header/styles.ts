import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  width: 100%;
  background-color: blue;
  border-radius: 16px;
  margin-top: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContainerHeaderButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 120px;
  height: 40px;
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
