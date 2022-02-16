import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import {anagrama} from '../services/Anagrama';
import { Home, Main, CardDesafios, CardDesafiosRespostas } from '../styles/styleHome';

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
            <Header />
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
            <Footer />
        </Home>
    );
}

export default DesafioThree;