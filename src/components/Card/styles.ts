import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.backgrounds.cardLinearRight};
  width: 350px;
  height: 140px;
  border-radius: 8px;
`;
export const Wrapper = styled.View`
  height: 80%;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.WHITE};
  margin-top: 10px;
`;
export const Value = styled.Text`
  font-size: 28px;
  color: ${theme.colors.WHITE};
  font-weight: 600;
`;
export const Icon = styled.Image`
  width: 90px;
  height: 144px;
  margin-top: -40px;
`;
