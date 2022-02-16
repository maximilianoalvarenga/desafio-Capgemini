import { Routes ,Route } from 'react-router-dom';
import DesafioOne from './pages/DesafioOne';
import DesafioThree from './pages/DesafioThree';
import DesafioTwo from './pages/DesafioTwo';
import Homepage from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="desafio-1" element={ <DesafioOne /> } />
      <Route path="desafio-2" element={ <DesafioTwo /> } />
      <Route path="desafio-3" element={ <DesafioThree /> } />
      
    </Routes>
  );
}

export default App;
