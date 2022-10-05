import { useState } from 'react';
import it from './it.png';
import recurso1 from '../Header/recurso1.webp';
import { Button } from '@material-tailwind/react';

const About = () => {

  let activo = true;
  let colorText1 = '#06D7F9';
  let colorText2 = '#225890';
  const [mision, setMision] = useState(true)
  const [textContent, setTextContent] = useState('Ser equipo con nuestros clientes, asistirlos en la construcción y desarrollo de sus negocios, sostener con nuestra experiencia y habilidades el proceso de crecimiento de nuestros clientes para que hagan realidad su meta de ser sus propios jefes y de esta forma convertirse en ciudadanos que pueden brindar soluciones a la comunidad y ofrecer posibilidades de empleo a otras personas.')


  const handleButtonMision = () => {
    activo = true;
    setMision(true)
    setTextContent('Ser equipo con nuestros clientes, asistirlos en la construcción y desarrollo de sus negocios, sostener con nuestra experiencia y habilidades el proceso de crecimiento de nuestros clientes para que hagan realidad su meta de ser sus propios jefes y de esta forma convertirse en ciudadanos que pueden brindar soluciones a la comunidad y ofrecer posibilidades de empleo a otras personas.')
  }

  const handleButtonVision = () => {
    setMision(false)
    setTextContent('Colaborar con la comunidad facilitando el desarrollo de nuevos negocios, que brindan bienestar, riqueza y empleo. Somos una firma comprometida socialmente, nos importan nuestros clientes, nuestros colaboradores y la comunidad, creemos y creamos negocios rentables y honorables, somos curiosos, audaces y trabajamos en equipo')
  }




  return (
    <section id='Nosotros' className="flex flex-col justify-center items-start" style={{
      padding: '100px 150px 50px',
      gap: '16px'
    }} >
      {/*       <img src={it} alt="it" className='w-20 h-20 mt-5' /> */}
      <div className='flex flex-col items-start justify-center'>
        <div className='flex flex-row items-center justify-center'>
          <span className='text-3xl font-bold text-[#06D7F9]' style={{ fontSize: "20px", fontWeight: "600" }}>Sobre Nosotros</span>
        </div>
        <div className='flex flex-wrap items-center justify-start mt-5 align-middle'>
          <img src={recurso1} alt="it" className='w-7 h-7 mr-[40px]' />
          <h2 className='text-[35px] mb-[16px] font-bold text-center text-[#225890]'>Soluciones profesionales para profesionales</h2>
          <p className='text-justify  text-[#225890] pt-[10px] pr-[70px] pb-[10px] pl-[70px] ' style={{ fontSize: "16px" }}>Desde inner-team resolvemos las tareas inherentes a la administración de la actividad económica de nuestros clientes. Nuestra experiencia nos permite brindar servicios de capacitación, coaching y consultoría estratégica, impositiva, contable y administrativa.
            Elegimos a otros profesionales como clientes porque <strong>queremos verlos crecer y ser parte de ello.</strong></p>
        </div>

        <div className='flex flex-wrap items-start justify-start'>
          <div className='pl-[70px]' >
            <button className='text-3xl font-bold' style={{ fontSize: "20px", fontWeight: "600", color:activo ? colorText1 : colorText2 }} onClick={handleButtonMision}>Misión
            </button>
            <span className='p-2'> | </span>
            <button className='buttonVision text-3xl font-bold' style={{ fontSize: "20px", fontWeight: "600", color: !activo ? colorText1 : colorText2 }} onClick={handleButtonVision}>Visión
            </button>
          </div>

          <div className='flex flex-wrap items-center justify-center mt-5 align-middle'>
          <p className='text-justify  text-[#225890] pt-[10px] pr-[70px] pb-[10px] pl-[70px]' style={{ fontSize: "16px" }}>{textContent}
          </p>
        </div>
        </div>
      </div>



    </section>
  )
}
export default About