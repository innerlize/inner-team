import { useEffect, useState } from 'react';
import recurso1 from '../Header/recurso1.webp';
import recurso2 from './recursomobile.png';
import recurso3 from './it.png';

const About = () => {

  let colorText1 = '#06D7F9';
  let colorText2 = '#225890';
  const [mision, setMision] = useState(true)
  const [textContent, setTextContent] = useState('Ser equipo con nuestros clientes, asistirlos en la construcción y desarrollo de sus negocios, sostener con nuestra experiencia y habilidades el proceso de crecimiento de nuestros clientes para que hagan realidad su meta de ser sus propios jefes y de esta forma convertirse en ciudadanos que pueden brindar soluciones a la comunidad y ofrecer posibilidades de empleo a otras personas.')
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth >= 960 ? setMobile(false) : setMobile(true);
    window.addEventListener(
      "resize",
      () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
    );
  }, []);

  const handleButtonMision = () => {
    setMision(true)
    setTextContent('Trabajar juntos para lograr que más profesionales alcancen la independencia económica y el sueño de ser sus propios jefes, creando valor para la comunidad y bienestar personal.')
  }

  const handleButtonVision = () => {
    setMision(false)
    setTextContent('Colaborar con la comunidad facilitando el desarrollo de nuevos negocios, que brindan bienestar, riqueza y empleo. Somos una firma comprometida socialmente, nos importan nuestros clientes, nuestros colaboradores y la comunidad, creemos y creamos negocios rentables y honorables, somos curiosos, audaces y trabajamos en equipo')
  }

  return (
    <section id='Nosotros' className="flex flex-col justify-center relative" style={{
      padding: mobile ? '9% 5% 3% 5%' : '10% 5% 10% 15%',
      gap: '16px',
      alignItems: mobile ? 'center' : 'start'
    }} >
      <img src={recurso3} alt="it" className='w-[238px] h-[245px]'
        style={{
          width: mobile ? '100px' : '238px',
          height: mobile ? '105px' : '245px',
          position: 'absolute',
          top: mobile ? '1%' : '10%',
          right: mobile ? '0' : '2%',
          zIndex: '-1'}}
      />
      <div className='flex flex-col justify-center '
        style={{
          alignItems: mobile ? 'center' : 'start'
        }}>

        {mobile && <img src={recurso2} alt="it" className='w-7 h-7 mb-3' />}
        <div className='flex flex-row items-center justify-center'>
          <span className='text-3xl font-bold text-[#06D7F9]' style={{ fontSize: "20px", fontWeight: "600" }}>Sobre Nosotros</span>
        </div>
        <div className='flex flex-wrap items-center justify-start mt-5 align-middle'>
         {!mobile && <img src={recurso1} alt="it" className='w-7 h-7 p-0 mr-[40px]'/>}
          <h2 className=' mb-[16px] font-bold text-center text-[#225890]'
            style={{
              fontSize: mobile ? '24px' : '35px',
            }}

          >Mejor en Equipo</h2>
          <p className='text-[#225890] pt-[1%] pb-[1%] pl-[6%] '
            style={{
              fontSize: mobile ? '0.8rem' : '1rem',
              textAlign: mobile ? 'center' : 'justify',
              paddingRight: mobile ? '0' : '7%',
            }}>
              Sabemos trabajar en equipo y comprobamos que es la mejor manera de que alcances resultados extraordinarios.
              Nos ocupados de las tareas inherentes a la administración y desarrollo de tus servicios profesionales. Te acompañamos con servicios administrativos, consultoría estratégica y coaching.
              {/* Elegimos a otros profesionales como clientes porque <strong className='text-[#225890]'>queremos verlos crecer y ser parte de ello.</strong> */}</p>
        </div>

        <div className='flex flex-wrap items-start'
          style={{
            justifyContent: mobile ? 'center' : 'start',
          }}

        >
          <div className='pl-[6%] pt-[2%]' >
            <button className='text-3xl font-bold'
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: mision ? colorText1 : colorText2,
              }} onClick={handleButtonMision}>Misión
            </button>
            <span className='p-2 text-[#225890]'> | </span>
            <button className='buttonVision text-3xl font-bold' style={{ fontSize: "20px", fontWeight: "600", color: !mision ? colorText1 : colorText2 }} onClick={handleButtonVision}>Visión
            </button>
          </div>

          <div className='flex flex-wrap items-center justify-center mt-1 align-middle'>
            <p className=' text-[#225890] pt-[1%] pb-[1%] pl-[6%] '
              style={{
                fontSize: mobile ? '0.8rem' : '1rem',
                textAlign: mobile ? 'center' : 'justify',
                paddingRight: mobile ? '0' : '7%',
              }}>
              {textContent}
            </p>
          </div>
        </div>
      </div>



    </section>
  )
}
export default About