import React, { useState } from 'react'

type ButtonProps = {
    text?: string;
    // adicionando ? a propriedade se torna opcional
}



export default function Button(props: ButtonProps) {

    const [state, setstate] = useState(0)

    return (
            <button onClick={() => setstate(state +1)} >{state}</button>
    )
}
