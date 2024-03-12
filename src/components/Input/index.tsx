import React from 'react';
import { InputProps } from './input';

import { 
    Container, 
    Camp,
} from './styles';

export default function Input({width, height, backgroundColorInput, placeholder}: InputProps) {
  return (
    <Container style={{width: width, height: height}}>
        <Camp>{placeholder}</Camp>
    </Container>
  );
}