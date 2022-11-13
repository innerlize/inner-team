import React from 'react';
import ServiceCard from './ServiceCard';


const Servicios = () => {



  return (
    <section className="flex flex-col justify-center " style={{
      gap: '4%'
    }}  >
      <div className='flex flex-row items-center justify-center' id="servicios" >
        <span className='text-3xl font-bold text-[#06D7F9]' style={{ fontSize: "20px", fontWeight: "600" }}>Nuestros servicios</span>
      </div>

      <div className='flex flex-wrap items-center justify-center mt-5 align-middle'>
        <h2 className='text-[43px] mb-[16px] font-bold text-center text-[#225890]'>¿Qué servicios brindamos?</h2>
      </div>

      <div className='flex flex-wrap items-center justify-center p-4' style={{ maxWidth: '100%'}} >
        
        < ServiceCard title={'Administración'}
          background='bg-servicio1'
          text='Nos ocupamos de tus impuestos: vencimientos y liquidaciones impositivas, diseño de procesos administrativos contables: facturación, cobranzas-pagos, y otros trámites ante organismos gubernamentales.'
        />
        < ServiceCard title='Consultoría'
          background='bg-servicio2'
          text='Te asesoramos desde la inscripción en AFIP, Rentas y organismos de control, a desarrollo de nuevos servicios, determinación de costos y precios de venta, análisis de rentabilidad, planeamiento estratégico e identidad de marca, entre otros.'
        />
        < ServiceCard title='Coaching'
          background='bg-servicio3'
          text='Creamos un plan de acción para alcanzar tus objetivos, te acompañamos en el proceso de superar obstáculos y desarrollar nuevas habilidades, hacia tu mejor versión.'
        />

      </div>
    </section >
  )
}
export default Servicios


