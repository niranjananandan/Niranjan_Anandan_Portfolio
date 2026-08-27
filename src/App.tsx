import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <NetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
