import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 90%;
    justifyContent: flex-start;
    alignItems: flex-start;
    marginTop: 50px;
    marginLeft: 20px;
`;
export const Content = styled.View`
    width: 90%;
    height: 90%;
    justifyContent: space-between;
    alignItems: center;
    `;

export const Title = styled.Text`
    fontSize: 16px;
    color:  ${theme.colors.BLACK};
    `;

export const Section = styled.View`
    width: 84%;
    height: 90%;
    `
