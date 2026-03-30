import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="work" element={<ComingSoon title="Projects" />} />
          <Route path="writing" element={<ComingSoon title="Writing" />} />
          <Route path="about" element={<ComingSoon title="About" />} />
          <Route path="case-studies/:slug" element={<ComingSoon title="Case Study" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
