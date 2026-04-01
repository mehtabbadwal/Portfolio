import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import ComingSoon from './pages/ComingSoon';
import MehtabLLM from './components/MehtabLLM';
import FloatingChatButton from './components/FloatingChatButton';

function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="work" element={<Projects />} />
          <Route path="writing" element={<ComingSoon title="Writing" />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies/:slug" element={<ComingSoon title="Case Study" />} />
        </Route>
      </Routes>
      <MehtabLLM />
      <FloatingChatButton />
    </BrowserRouter>
  );
}

export default App;
