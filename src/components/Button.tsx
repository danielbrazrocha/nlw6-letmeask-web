import React from 'react'
import {ButtonHTMLAttributes} from 'react';

import '../styles/button.scss'

// type ButtonProps = {
//     text?: string;
//     // adicionando ? a propriedade se torna opcional
// }

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
  };
  
  export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
      <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
    )
  }

