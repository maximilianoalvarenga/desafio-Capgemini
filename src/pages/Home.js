import { useNavigate} from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { desafios } from '../services/desafios';

import { Home, Card, Main } from '../styles/styleHome';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <Home>
            <Header />
            <Main>
                {desafios.map((desafio) => (
                    <Card onClick={ () => navigate(desafio.route) }>
                        <span>{desafio.title}</span>
                        <span>{desafio.name}</span>
                    </Card>
                ))}
          </Main>
          <Footer />
        </Home>
    );
}

export default Homepage;