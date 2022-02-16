import { useNavigate} from 'react-router-dom';
import { Footer } from '../components/Footer';

import { Home, Header, Card, Main } from '../styles/styleHome';

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <Home>
            <Header>
                <span> Desafio Campgemini - Solução</span>
            </Header>
            <Main>
                <Card onClick={ () => navigate('desafio-1') }>
                    <span>Desafio 01</span>
                    <span>Escada</span>
                </Card>
                <Card onClick={ () => navigate('desafio-2')}>
                    <span>Desafio 02</span>
                    <span>Senha</span>
                </Card>
                <Card onClick={ () => navigate('desafio-3')}>
                    <span>Desafio 03</span>
                    <span>Anagrama</span>
                </Card>
          </Main>
          <Footer />
        </Home>
    );
}

export default Homepage;