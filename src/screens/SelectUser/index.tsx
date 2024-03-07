import React from 'react';
import { 
  Container,
  Content,
  Wrapper,
  Span,
  Text
} from './styles';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { TouchableOpacity } from 'react-native';

export default function SelectUser() {
  return (
    <Container>
        <Content>
        <Logo />
        <Wrapper>
          <Span>
            Entrar como:
          </Span>
          <Button 
            width={350}
            height={50}
            title={'Usuário'}
          />
          <Button 
            width={350}
            height={50}
            title={'Usuário'}
            backgroundColorButton='#ffffff'
          />
        </Wrapper>
        <Text>Não tem uma conta? <TouchableOpacity><Span>Crie uma agora!</Span></TouchableOpacity></Text>
        </Content>

    </Container>
  );
}

