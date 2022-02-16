import { useState } from 'react';
import createLadder from '../services/Escada';
import { Home, Header, Main, CardDesafios, CardDesafiosRespostas, Footer } from '../styles/styleHome';

const DesafioOne = () => {
    const [valueInput, setValueInput] = useState('')
    const [escada, setEscada] = useState([]);

    const criarEscada = () =>{
        const buscaEscada = createLadder(valueInput);
        const removeQuebra = buscaEscada.split(/(\r\n|\n|\r)/gm)
        .filter((item) => item !== '\n');

        setEscada(removeQuebra);
    }

    const limpar = () => {
        setEscada([]);
        setValueInput('');
    }

    return(
        <Home>
            <Header>
                <span> Desafio Campgemini - Solução</span>
            </Header>
            <Main>
                <CardDesafios>
                    <div className='enunciado'>
                        <span>Insira a quantidade de degraus que sua escada vai ter:</span>
                    </div>
                    <input
                        type='text'
                        value={valueInput}
                        onChange={ (e) => setValueInput(e.target.value)}
                    />
                    <div className='buttons'>
                        <button type='button' onClick={criarEscada}>
                            Criar
                        </button>
                        <button type='button' onClick={limpar}>
                            Limpar
                        </button>
                    </div>
                </CardDesafios>
                <CardDesafiosRespostas>
                    <ul>{escada.map((item) => <li>{`${item}`}</li>)}</ul>
                </CardDesafiosRespostas>
            </Main>
            <Footer>

            </Footer>
        </Home>
    );
}

export default DesafioOne;