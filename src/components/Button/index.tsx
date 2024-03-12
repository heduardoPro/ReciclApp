import React from 'react';
import { ButtonProps } from './button';
import { Container } from './styles';
import { Text } from 'react-native';
import { theme } from '../../styles/theme';

export default function Button({width, height, title, backgroundColorButton=`${theme.backgrounds.bgButton}`}: ButtonProps) {
  return (
    <Container style={{width: width, height: height, backgroundColor: backgroundColorButton}}>
        <Text>{title}</Text>
    </Container>
  );
}