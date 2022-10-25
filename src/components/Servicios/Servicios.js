import React, { useEffect, useState } from 'react';
import circulo from './circulo.png';
import servicies from './tableservice';
import circulo2 from './circulo2.png';
import './Style.css';


const Servicios = () => {

  const [servicios, setServicios] = useState(servicies);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth >= 960 ? setMobile(false) : setMobile(true) 
    
      window.addEventListener(
          "resize",
          () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
      );
  }, []);


  const handleClick = (Id) => {
    const newServicies = [...servicios];
    newServicies[Id - 1].estado = !newServicies[Id - 1].estado;
    setServicios(newServicies);


  };



  return (
    <section className="flex flex-col justify-center" style={{
      
      gap: '4%'
    }}  >
      <div className='flex flex-row items-center justify-center' id="servicios" >
        <span className='text-3xl font-bold text-[#06D7F9]' style={{ fontSize: "20px", fontWeight: "600" }}>Nuestros servicios</span>
      </div>

      <div className='flex flex-wrap items-center justify-center mt-5 align-middle'>
        <h2 className='text-[43px] mb-[16px] font-bold text-center text-[#225890]'>¿Qué servicios brindamos?</h2>
      </div>
      <div className='grid items-center justify-center mt-5 align-middle ' style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 25rem))', gap: '1rem',
        margin: '0% 10% 0% 10%'
      }}>
        {servicios.map((servicio, index) => (
          <React.Fragment key={servicio.id}>
            {servicio.estado ? (
              <div className={`servicioEfect relative top-0 before:transition delay-150 duration-300 ease-in-out `} key={servicio.id} style={{
                maxWidth: '25rem',
                minWidth: '15rem',
                height:  mobile ? '10rem' : '15rem',
                left: '0px',
                top: '0px',
                borderRadius: '20px',
                margin: '1.3%',
                boxSizing: 'border - box',
                background: '#FFFFFF',
                border: '2px solid #06D7F9',

              }} >
            <p className='justify-center m-auto  text-[#225890]'
              style={{ lineHeight: '17px', fontFamily: 'Poppins', fontSize: '14px', padding:'7%' }}>{servicio.description} </p>

            <button className='flex flex-col items-end absolute' style={{ left: '90%', top: "80%",margin:'0 14px 14px 0' }} onClick={() => handleClick(servicio.id)} >
              <img src={circulo2} alt="circulo" />
            </button>
          </div>

        ) : (
  <div className={`servicioEfect flex ${servicio.image} bg-center bg-cover relative top-0 before:transition delay-150 duration-300 ease-in-out`} key={index} style={{
          maxWidth: '25rem',
          minWidth: '15rem',
          height:   mobile ? '10rem' : '15rem',
          left: '0px',
          top: '0px',
          borderRadius: '20px',
        }} >
          <h3 className='justify-center m-auto'
            style={{ fontWeight: 700, lineHeight: '45px', fontFamily: 'Poppins', fontSize: '30px', color: '#FFFFFF' }}>{servicio.title} </h3>
          <button className='flex flex-col items-end absolute transition delay-500 '  style={{ left: '90%', top: "80%", margin:'0 14px 14px 0'}} onClick={() => handleClick(servicio.id)} >
            <img src={circulo} alt="circulo" />
          </button>

        </div>
            )}
      </React.Fragment>
        ))}
    </div>
    </section >
  )
}
export default Servicios


