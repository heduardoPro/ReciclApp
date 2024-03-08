import React from 'react';

import Logo from '../../components/Logo';
import Card from '../../components/Card';

import { 
  Container,
} from './styles';
import Title from '../../components/Title';


export default function Home() {
  return (
    <Container>
        <Logo
          width={220}
          height={40} 
        />
        <Card
          title='Saldo Total'
          value={'99.999.99,99'}
        />
        <Title 
          text='Bônus:'
          size={24} 
        />
    </Container>
  );
}