import { Animated } from "react-native";
import styled from "styled-components/native";

export const ContainerListItem = styled.View<any>`
  background-color: ${({ theme }) => theme.COLORS.GREY50};
  justify-items: center;
  width: 300px;
  height: 530px;
  border-radius: 16px;
  /* elevation: 10; */
  border: 3px solid #ddd;
`;
export const ItemImage = styled.Image`
  border-radius: 16px;
  height: 300px;
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

export const ItemLike = styled.TouchableOpacity`
  /* width: 100%; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  background-color: black;
  border-radius: 30px;
  padding: 16px;
  margin: 16px;
  position: absolute;
`;
