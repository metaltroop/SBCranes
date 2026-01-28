import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Projects />
        <Clients />
      </main>
      <Contact />
    </div>
  );
}

export default App;
