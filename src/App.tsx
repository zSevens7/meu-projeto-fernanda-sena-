import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import FernandaSena from './pages/FernandaSena';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fernanda-sena" element={<FernandaSena />} />
      {/* Você pode adicionar outras rotas aqui conforme a necessidade */}
    </Routes>
  );
}

export default App;