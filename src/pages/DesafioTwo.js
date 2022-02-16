import { useState } from 'react';
import validatePassword from '../services/req02';
import { Home, Header, Main, CardDesafios, CardDesafiosRespostas, Footer } from '../styles/styleHome';

const DesafioTwo = () => {
    const [valueInput, setValueInput] = useState('');
    const [charFaltantes, setCharFaltantes] = useState('');

    const verificaSenha = () => {
        const retorno = validatePassword(valueInput);
        setCharFaltantes(retorno)
    }

    const limpar = () => {
        setValueInput('');
        setCharFaltantes(6)
    }
    
    return(
        <Home>
            <Header>
                <span> Desafio Campgemini - Solução</span>
            </Header>
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
                        ) :  (
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
                            
                        )}
                    </div>
                </CardDesafiosRespostas>
            </Main>
            <Footer>

            </Footer>
        </Home>
    );
}

export default DesafioTwo;