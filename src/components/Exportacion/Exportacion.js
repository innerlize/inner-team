import { useEffect, useState } from 'react';
import exportacion from './exportDesck.png'
import exportacionMobile from './exportMobile.png'

const Exportacion = () => {


  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth >= 960 ? setMobile(false) : setMobile(true) 
    
      window.addEventListener(
          "resize",
          () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
      );
  }, []);


    return (

        <section className="justify-center lg:px-[16vw]" style={{
            marginBottom: mobile? '25px' : '100px',
        }}>
           

            <div className='flex flex-col items-center justify-center' style={{
                background: '#624599',
                borderRadius: '5px',
                width: '80%',
                height: '15px',
                margin: '5% 10% 2% 10%',
            }}>

            </div>



            <div className='grid items-center justify-center mt-5 align-middle ' style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 25rem))',
                margin: '0% 11% 0% 10%'
            }}>
                { mobile ? (
                           <div className='p-5 m-5'>
                           <img src={exportacionMobile} alt="exportacion" />
       
                       </div>
                ) : null }
                <div>
                    <div className="flex items-center justify-center  ">
                        <div className='flex flex-wrap items-center justify-center mt-5 align-middle'>
                            <h2 className='text-[35px] mb-[16px] font-bold text-center text-[#225890]'>Exportación de Servicios Profesionales</h2>

                            <div className='items-center justify-center mt-5 align-middle'>
                                <p className='text-[14px] mb-[16px]  text-start text-[#225890]'>
                                Organiza tus operaciones con clientes en el exterior:
                                </p>

                                <ul className='text-[14px] mb-[16px] text-start text-[#225890]' style={{
                                    listStyleType: 'circle',
                                    listStylePosition: 'inside',

                                }}>
                                    <li className='text-[#225890]'>Emití Factura y justifica tus ingresos.</li>
                                    <li className='text-[#225890]'>Evita retenciones de impuestos.</li>
                                    <li className='text-[#225890]'>Ordena tu negocio y accede a mejores condiciones financieras.</li>
                                    <li className='text-[#225890]'>Diseña tu negocio para facturar también en el mercado local.</li>
                                    <li className='text-[#225890]'>Conta con asesoramiento profesional en todo momento.</li>
                                </ul>

                                <p className='text-[14px] mb-[16px] text-start text-[#225890]'>
                                    Contras o aspectos que requieren mayor seguimiento:
                                </p>

                                <ul className='text-[14px] mb-[16px] text-start text-[#225890]' style={{
                                    listStyleType: 'circle',
                                    listStylePosition: 'inside',


                                }}>
                                    <li className='text-[#225890]'>Legislación en destino.</li>
                                    <li className='text-[#225890]'>Socios comerciales.</li>
                                    <li className='text-[#225890]'>Ingreso de divisas al país.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


                { !mobile ? (
                           <div className='p-5 m-5'>
                           <img src={exportacion} alt="exportacion" />
       
                       </div>
                ) : null }





            </div>

            
        </section>

    )

}

export default Exportacion