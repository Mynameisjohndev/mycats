import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderButton = styled.View`
  margin: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const PressButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: 3px dashed red;
`;
