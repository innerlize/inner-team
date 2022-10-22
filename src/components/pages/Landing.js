import NavigationDefault from "../components/Nav/NavigationDefault"
import Headers from "../components/Header/Header"
import About from "../components/About/About"
import Servicios from "../components/Servicios/Servicios"
import Exportacion from "../components/Exportacion/Exportacion"
import WhastappFloat from "../components/Whatsapp/WhastappFloat"
import FAQSection from "../FAQ-Section/FAQ-Section"
import TestimonialsSection from "../Testimonials-Section/Testimonials-Section"
import ClientsSection from "../Clients-Section/Clients-Section"
import ContactSection from "../Contact-Section/Contact-Section"
import FooterSection from "../Footer-Section/Footer-Section"


const Landing = () => {
  return (
    <>
      <NavigationDefault />
      <Headers />
      <About />
      <Servicios />
      <Exportacion />
      <WhastappFloat />
      <FAQSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
      <FooterSection />

    </>
  )
}
export default Landing