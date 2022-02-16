import { useState } from 'react';
import {anagrama} from '../services/Anagrama';
import { Home, Header, Main, CardDesafios, CardDesafiosRespostas, Footer } from '../styles/styleHome';

const DesafioThree = () => { 
    const [valueInput, setValueInput] = useState('');
    const [ quantidadeAnagramas, setQuantidadeAnagramas] = useState('');

    const limpar = () => {
        setValueInput('');
    }
    
    const anagramas = () => {
        const verificaAnagramas = anagrama(valueInput);

        setQuantidadeAnagramas(verificaAnagramas);
    }
    return(
        <Home>
            <Header>
                <span> Desafio Campgemini - Solução</span>
            </Header>
            <Main>
                <CardDesafios>
                    <div className='enunciado'>
                        <span>Quantos pares de anagramas podem sem encontrados na seguinte palavra:</span>
                    </div>
                    <input
                        type='text'
                        value={valueInput}
                        onChange={ (e) => setValueInput(e.target.value)}
                    />
                    <div className='buttons'>
                        <button type='button' onClick={anagramas}>
                            Verificar
                        </button>
                        <button type='button' onClick={limpar}>
                            Limpar
                        </button>
                    </div>
                </CardDesafios>
                <CardDesafiosRespostas>
                    <div className='password-resposta'>
                        <span>Podem ser encontrados {`${quantidadeAnagramas} `}
                        anagramas na palavra informada.</span>
                    </div>
                </CardDesafiosRespostas>
            </Main>
            <Footer>

            </Footer>
        </Home>
    );
}

export default DesafioThree;