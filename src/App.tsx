import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import FernandaSena from './pages/FernandaSena';
import AConsultaGeriatrica from './pages/AConsultaGeriatrica';
import Especialidades from './pages/Especialidades';
import Checkup from './pages/Checkup';
import EnvelhecimentoSaudavel from './pages/EnvelhecimentoSaudavel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fernanda-sena" element={<FernandaSena />} />
      <Route path="/a-consulta-geriatrica" element={<AConsultaGeriatrica />} />
      <Route path="/especialidades" element={<Especialidades />} />
      <Route path="/especialidades/checkup" element={<Checkup />} />
      <Route path="/especialidades/envelhecimento-saudavel" element={<EnvelhecimentoSaudavel />} />
      {/* Você pode adicionar outras rotas aqui conforme a necessidade */}
    </Routes>
  );
}

export default App;