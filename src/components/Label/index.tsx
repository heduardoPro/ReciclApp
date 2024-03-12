import React from 'react';

import { LabelProps } from './label';
import { TextLabel } from './styles,';

export default function Label({ text}: LabelProps) {
  return (
    <TextLabel>{text}</TextLabel>
  );
}