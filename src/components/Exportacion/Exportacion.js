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

        <section className="justify-center"  >

            <div className='flex flex-col items-center justify-center' style={{
                background: '#624599',
                borderRadius: '5px',
                width: '80%',
                height: '15px',
                margin: '5% 10% 2% 10%',
            }}>

            </div>



            <div className='grid items-center justify-center mt-5 align-middle ' style={{
                gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 30rem))',
                margin: '0% 10% 0% 10%'
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
                                    De acuerda la legislación argentina, se considera exportación de servicios a aquellos prestados desde el país, <strong> no ejecutados en relación de dependencia y que son gozados en el exterior.</strong>
                                </p>
                                <p className='text-[14px] font-bold mb-[16px] text-start text-[#225890]'>
                                    Aspectos relevantes: pros y contras
                                </p>
                                <p className='text-[14px] mb-[16px] text-start text-[#225890]'>
                                    Pros o beneficios:
                                </p>

                                <ul className='text-[14px] mb-[16px] text-start text-[#225890]' style={{
                                    listStyleType: 'circle',
                                    listStylePosition: 'inside',

                                }}>
                                    <li>Diversificación de ingresos.</li>
                                    <li>Acceso a divisas extranjeras.</li>
                                    <li>Exención en ingresos brutos.</li>
                                </ul>

                                <p className='text-[14px] mb-[16px] text-start text-[#225890]'>
                                    Contras o aspectos que requieren mayor seguimiento:
                                </p>

                                <ul className='text-[14px] mb-[16px] text-start text-[#225890]' style={{
                                    listStyleType: 'circle',
                                    listStylePosition: 'inside',


                                }}>
                                    <li>Legislación en destino.</li>
                                    <li>Socios comerciales.</li>
                                    <li>Ingreso de divisas al país.</li>
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