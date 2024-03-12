import styled from  'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.TouchableOpacity`
    backgroundColor: ${theme.backgrounds.bgButton};
    borderRadius: 8px;
    border: 0.6px ${theme.colors.GREEN} solid;
    alignItems: center;
    justifyContent: center;
`;