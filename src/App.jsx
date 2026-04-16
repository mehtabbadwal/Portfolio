import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import HPEChatbot from './pages/case-studies/HPEChatbot';
import HPEPFA from './pages/case-studies/HPEPFA';
import Qubera from './pages/case-studies/Qubera';
import FluidraPro from './pages/case-studies/FluidraPro';
import FluidraRewards from './pages/case-studies/FluidraRewards';
import ShadowSystemProblem from './pages/blog/ShadowSystemProblem';
import TheColleagueProblem from './pages/blog/TheColleagueProblem';
import StayOutOfTheWay from './pages/blog/StayOutOfTheWay';
import WhenAIShiftsControl from './pages/blog/WhenAIShiftsControl';
import DesigningForDignity from './pages/blog/DesigningForDignity';
import WhyUsersDontSayWhatTheyFeel from './pages/blog/WhyUsersDontSayWhatTheyFeel';
import TheWeightOfChoice from './pages/blog/TheWeightOfChoice';
import ThisSite from './pages/ThisSite';
import ComingSoon from './pages/ComingSoon';
import MehtabLLM from './components/MehtabLLM';
import FloatingChatButton from './components/FloatingChatButton';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="work" element={<Projects />} />
          <Route path="writing" element={<Writing />} />
          <Route path="about" element={<About />} />
          <Route path="case-studies/hpe-chatbot" element={<HPEChatbot />} />
          <Route path="case-studies/hpe-pfa" element={<HPEPFA />} />
          <Route path="case-studies/qubera" element={<Qubera />} />
          <Route path="case-studies/fluidra" element={<FluidraPro />} />
          <Route path="case-studies/fluidra-rewards" element={<FluidraRewards />} />
          <Route path="blog/shadow-system-problem" element={<ShadowSystemProblem />} />
          <Route path="blog/the-colleague-problem" element={<TheColleagueProblem />} />
          <Route path="blog/stay-out-of-the-way" element={<StayOutOfTheWay />} />
          <Route path="blog/when-ai-shifts-control" element={<WhenAIShiftsControl />} />
          <Route path="blog/designing-for-dignity" element={<DesigningForDignity />} />
          <Route path="blog/why-users-dont-say-what-they-feel" element={<WhyUsersDontSayWhatTheyFeel />} />
          <Route path="blog/the-weight-of-choice" element={<TheWeightOfChoice />} />
          <Route path="this-site" element={<ThisSite />} />
          <Route path="case-studies/:slug" element={<ComingSoon title="Case Study" />} />
        </Route>
      </Routes>
      <MehtabLLM />
      <FloatingChatButton />
    </BrowserRouter>
  );
}

export default App;
