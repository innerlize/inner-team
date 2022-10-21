import NavigationDefault from "../components/Nav/NavigationDefault"
import Headers from "../components/Header/Header"
import About from "../components/About/About"
import Servicios from "../components/Servicios/Servicios"
import Exportacion from "../components/Exportacion/Exportacion"
import WhastappFloat from "../components/Whatsapp/WhastappFloat"


const Landing = () => {
  return (
    <>
    <NavigationDefault />
    <Headers />
    <About />
    <Servicios />
    <Exportacion/>
    <WhastappFloat />
    </>
  )
}
export default Landing