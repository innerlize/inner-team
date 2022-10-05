import React, { useState } from 'react';
import circulo from './circulo.png';
import servicies from './tableservice';
import circulo2 from './circulo2.png';

const Servicios = () => {

  const [servicios, setServicios] = useState(servicies);


  const handleClick = (Id) => {
    const newServicies = [...servicios];
    newServicies[Id - 1].estado = !newServicies[Id - 1].estado;
    setServicios(newServicies);


  };



  return (
    <section className="flex flex-col justify-center" style={{
      padding: '100px 150px 50px',
      gap: '16px'
    }}  >
      <div className='flex flex-row items-center justify-center' id="servicios" >
        <span className='text-3xl font-bold text-[#06D7F9]' style={{ fontSize: "20px", fontWeight: "600" }}>Nuestros servicios</span>
      </div>

      <div className='flex flex-wrap items-center justify-center mt-5 align-middle'>
        <h2 className='text-[35px] mb-[16px] font-bold text-center text-[#225890]'>¿Qué servicios brindamos?</h2>
      </div>
      <div className='flex flex-wrap items-center justify-start mt-5 align-middle' >
        {servicios.map((servicio, index) => (
          <React.Fragment key={servicio.id}>
            {servicio.estado ? (
              <div className={`flex relative top-0 before:transition delay-150 duration-300 ease-in-out `} key={servicio.id} style={{
                width: '45%',
                height: '258px',
                left: '0px',
                top: '0px',
                borderRadius: '20px',
                margin: '1.3%',
                boxSizing: 'border - box',
                background: '#FFFFFF',
                border: '2px solid #06D7F9',
                TransitionEvent: 'all 1.5s ease',
                

              }} >
            <p className='justify-center m-auto  text-[#225890]'
              style={{ lineHeight: '17px', fontFamily: 'Poppins', fontSize: '14px', padding:'10%' }}>{servicio.description} </p>

            <button className='flex flex-col items-end absolute' style={{ left: '90%', top: "80%",margin:'0 14px 14px 0' }} onClick={() => handleClick(servicio.id)} >
              <img src={circulo2} alt="circulo" />
            </button>
          </div>

        ) : (
        <div className={`flex ${servicio.image} bg-center bg-cover relative top-0 before:transition delay-150 duration-300 ease-in-out`} key={index} style={{
          width: '45%',
          height: '258px',
          left: '0px',
          top: '0px',
          borderRadius: '20px',
          margin: '1.3%'
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


