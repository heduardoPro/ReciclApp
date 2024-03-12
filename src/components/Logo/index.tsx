import React from 'react';
import { Image, View } from 'react-native';
import { LogoProps } from './logo';

import { Container } from './styles';

export default function Logo({width, height}: LogoProps) {
  return (
    <Container>
        <Image style={{width: width, height: height}} source={require('../../../assets/Logo.png')} />
    </Container>
  );
}


