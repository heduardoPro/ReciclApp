import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    justifyContent: center;
    alignItems: center;
`;
export const CardContainer = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    backgroundColor: ${theme.backgrounds.cardLinearRight};
    width: 350px;
    height: 140px;
    borderRadius: 8px;
`;
export  const Wrapper = styled.View`
    height:  80%;
    justifyContent: space-between;
    alignItems: flex-start;
`;
export const Title = styled.Text`
    fontSize: 20px;
    color: ${theme.colors.WHITE};
    marginTop: 10px;
`;
export const Value = styled.Text`
    fontSize: 28px;
    color: ${theme.colors.WHITE};
    fontWeight: 600;
`;
export const Icon = styled.Image`
    width: 90px;
    height: 120px;
`;

