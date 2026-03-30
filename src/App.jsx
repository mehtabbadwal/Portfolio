import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';
import Writing from './pages/Writing';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter basename="/Portfolio/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="writing" element={<Writing />} />
          <Route path="case-studies/:slug" element={<CaseStudies />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
