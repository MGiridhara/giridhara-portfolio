import Navbar from './components/Includes/Navbar';
import Hero from './components/Home/Hero';
import SkillsAndServices from './components/Home/Skills';
import FeaturedProjects from './components/Home/Projects';
import Experience from './components/Home/Experience';
import FreelancingServices from './components/Home/Freelancing';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      
      <Navbar />

      <main>
        <Hero />
        <SkillsAndServices />
        <FeaturedProjects />
        <Experience />
        <FreelancingServices />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;