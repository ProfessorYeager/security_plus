import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Study } from './pages/Study';
import { Quiz } from './pages/Quiz';
import { Analytics } from './pages/Analytics';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="study" element={<Study />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="stats" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default App;
