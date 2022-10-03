import './App.css';
import FAQSection from './components/FAQ-Section/FAQ-Section.js';
import TestimonialsSection from './components/Testimonials-Section/Testimonials-Section.js';
import ClientsSection from './components/Clients-Section/Clients-Section.js';
import ContactSection from './components/Contact-Section/Contact-Section.js';
import FooterSection from './components/Footer-Section/Footer-Section.js';


function App() {
  return (
    <div>
      <FAQSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}


export default App;
