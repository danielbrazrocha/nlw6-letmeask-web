import React from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import Button from '../components/Button'

export  function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logotipo LetMeAsk" />
                    <button className="create-room">
                        <img src={googleIconImg} alt="Botao de Logar com o Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o codigo da sala"
                        />
                    </form>
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                </div>
            </main>
        </div>
    )
}
