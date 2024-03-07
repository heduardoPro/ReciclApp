import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 100px;
`;

export const Content = styled.View`
    width: 90%;
    height: 90%;
    justifyContent: space-between;
    alignItems: center;
`;

export const Wrapper = styled.View`
    height: 40%;
    justifyContent: space-around;
    alignItems: flex-start;
`;

export const Text = styled.Text`
    color: ${theme.colors.BLACK};
    fontSize: 16px;
`;

export const Span = styled.Text`
    color: ${theme.colors.GREEN};
    fontSize: 16px;
`;
