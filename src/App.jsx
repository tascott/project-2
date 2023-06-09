import '../src/scss/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Team from './components/Team';
import ProjectList from './components/ProjectList';
import ProjectPage from './pages/Project';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Weather from './components/weatherAPI/Weather';
import InvoiceGenerator from './pages/Generate';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:urlFriendlyName" element={<ProjectPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/generate" element={<InvoiceGenerator />} />
      </Routes>
        </Layout>
    </Router >
  );
}


export default App;