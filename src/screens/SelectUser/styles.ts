import styled from  'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 120px;
`;

export const Wrapper = styled.View`
    height: 25%;
    justifyContent: space-between;
    alignItems: flex-start;
`;
export const Content = styled.View`
    width: 90%;
    height: 90%;
    justifyContent: space-between;
    alignItems: center;
`;
export const Text = styled.Text`
    color: ${theme.colors.BLACK};
    fontSize: 16px;
`;

export const Span = styled.Text`
    color: ${theme.colors.GREEN};
    fontSize: 16px;
`;





