import styled from  'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.SafeAreaView`
    width: 90%;
    height: 54px;
`;
export const Camp = styled.TextInput`
    height: 54px;
    borderRadius: 8px;
    border: 1px ${theme.colors.GREEN} solid;
    padding: 8px;
`;