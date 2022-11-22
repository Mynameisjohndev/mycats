import { Animated } from "react-native";
import styled from "styled-components/native";

export const ContainerListItem = styled.View<any>`
  background-color: ${({ theme }) => theme.COLORS.GREY50};
  justify-items: center;
  width: 300px;
  height: 500px;
  border-radius: 16px;
`;
export const ItemImage = styled.Image`
  /* width: 100%; */
  height: 300px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ItemLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ItemText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ItemDetails = styled.View`
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
`;
