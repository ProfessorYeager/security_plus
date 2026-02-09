import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Study } from './pages/Study';
import { Quiz } from './pages/Quiz';
import { Analytics } from './pages/Analytics';
import { Flashcards } from './pages/Flashcards';
import { Arcade } from './pages/Arcade';
import { LiveFire } from './pages/LiveFire';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="study" element={<Study />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="stats" element={<Analytics />} />
        <Route path="flashcards" element={<Flashcards />} />
        <Route path="arcade" element={<Arcade />} />
        <Route path="live-fire" element={<LiveFire />} />
      </Route>
    </Routes>
  );
}

export default App;
