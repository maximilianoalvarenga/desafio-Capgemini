import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import validatePassword from '../services/Password';
import { Home, Main, CardDesafios, CardDesafiosRespostas } from '../styles/styleHome';

const DesafioTwo = () => {
    const [valueInput, setValueInput] = useState('');
    const [charFaltantes, setCharFaltantes] = useState('');

    const verificaSenha = () => {
        const retorno = validatePassword(valueInput);
        setCharFaltantes(retorno)
    }

    const limpar = () => {
        setValueInput('');
        setCharFaltantes('')
    }
    
    return(
        <Home>
            <Header />
            <Main>
                <CardDesafios>
                    <div className='enunciado'>
                        <span>Insira a senha para validação:</span>
                    </div>
                    <input
                        type='text'
                        value={valueInput}
                        onChange={ (e) => setValueInput(e.target.value)}
                    />
                    <div className='buttons'>
                        <button type='button' onClick={verificaSenha}>
                            Validar
                        </button>
                        <button type='button' onClick={limpar}>
                            Limpar
                        </button>
                    </div>
                </CardDesafios>
                <CardDesafiosRespostas>
                    <div className='password-resposta'>
                        { charFaltantes === 0 ? (
                        <span>
                            Parabéns, sua senha senha é forte o suficiente,
                            falta satisfazer 0 critérios.
                        </span>
                        ) :  charFaltantes > 0 ?(
                            <>
                                <span>
                                    Sua senha não é forte o suficiente, falta satisfazer {`${charFaltantes} `}
                                    dos critérios estabelecidos abaixo:
                                </span>
                                <ul>
                                    <li>Possuir no mínimo 6 caracteres.</li>
                                    <li>Possuir no mínimo 1 digito.</li>
                                    <li>Possuir no mínimo 1 letra em minúsculo.</li>
                                    <li>Possuir no mínimo 1 letra em maiúsculo.</li>
                                    <li>Possuir no mínimo 1 caractere especial.</li>
                                </ul>
                            </>
                            
                        ) : <span></span>}
                    </div>
                </CardDesafiosRespostas>
            </Main>
            <Footer />
        </Home>
    );
}

export default DesafioTwo;