import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 120px;
  height: 40px;
  border-radius: 20px;
  margin: 6px;
  justify-content: center;
  align-items: center;
`;

export const HeaderButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 17px;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  background-color: white;
  border: 3px dashed red;
`;
