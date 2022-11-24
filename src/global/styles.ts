import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREY10};
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
