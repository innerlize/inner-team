import Headers from "../Header/Header";
import About from "../About/About"
import Servicios from "../Servicios/Servicios"
import Exportacion from "../Exportacion/Exportacion"
import WhastappFloat from "../Whatsapp/WhastappFloat"
import FAQSection from "../FAQ-Section/FAQ-Section"
import TestimonialsSection from "../Testimonials-Section/Testimonials-Section"
import ClientsSection from "../Clients-Section/Clients-Section"
import ContactSection from "../Contact-Section/Contact-Section"


const Landing = () => {
  return (
    <>

      <Headers />
      <About />
      <Servicios />
      <Exportacion />
      <WhastappFloat />
      <FAQSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />

    </>
  )
}
export default Landing