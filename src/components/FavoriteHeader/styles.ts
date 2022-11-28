import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const HeaderButton = styled.TouchableOpacity`
  margin: 6px;
  justify-content: center;
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;
