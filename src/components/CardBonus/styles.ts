import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 999px;
  background-color: ${theme.backgrounds.bgButton};
  align-items: center;
  justify-content: center;
`;

export const TextCard = styled.Text`
  width: 100px;
  text-align: center;
`;

export const Icon = styled.Image`
  width: 45px;
  height: 45px;
`;
