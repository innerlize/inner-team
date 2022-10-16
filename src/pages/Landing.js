import NavigationDefault from "../components/Nav/NavigationDefault"
import Headers from "../components/Header/Header"
import About from "../components/About/About"
import Servicios from "../components/Servicios/Servicios"
import Exportacion from "../components/Exportacion/Exportacion"


const Landing = () => {
  return (
    <>
    <NavigationDefault />
    <Headers />
    <About />
    <Servicios />
    <Exportacion/>
    </>
  )
}
export default Landing