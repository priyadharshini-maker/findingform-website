import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <footer className="px-6 py-12 md:px-12 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-xs opacity-40 uppercase tracking-widest">
          © 2024 Empathetic Resources
        </div>
        <div className="flex gap-8 text-xs font-medium tracking-widest uppercase">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
        </div>
      </footer>
    </div>
  );
}

