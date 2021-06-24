import React from 'react'
import {ButtonHTMLAttributes} from 'react';

import '../styles/button.scss'

// type ButtonProps = {
//     text?: string;
//     // adicionando ? a propriedade se torna opcional
// }

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;



export function Button(props: ButtonProps) {

    return (
            <button className="button" {...props} />
    )
}
