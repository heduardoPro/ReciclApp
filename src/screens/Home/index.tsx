import React from 'react';
import { Text } from 'react-native';
import Logo from '../../components/Logo';
import { 
  Container,
  Title,
  Section,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Logo
      width={230}
      height={40} 
      />
      <Title>Olá, Usuário!</Title>

      <Section>
        
      </Section>
    </Container>
  );
}