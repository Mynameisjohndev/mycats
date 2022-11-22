import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* padding: 32px; */
`;
