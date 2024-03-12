import React from 'react';
import { Text } from './styles';

interface TitleProps {
    size: number;
    text: string;
};

export default function Title({size, text}: TitleProps) {
  return (
    <Text style={{fontSize: size}}>
        {text}
    </Text>
  );
}