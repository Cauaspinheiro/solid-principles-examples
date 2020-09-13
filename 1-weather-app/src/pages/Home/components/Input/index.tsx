import React, { InputHTMLAttributes } from 'react'

import { InputContainer, InputLabel, HTMLInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input: React.FC<InputProps> = ({ name, label, ...inputProps }) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <HTMLInput type="text" id={name} {...inputProps} />
    </InputContainer>
  )
}

export default Input
