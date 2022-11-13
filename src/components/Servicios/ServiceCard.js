import React, { useEffect, useState } from 'react'
import circulo from './circulo.png';
import circulo2 from './circulo2.png';
import './Style.css';

const ServiceCard = ({title, text, background}) => {

    const [status, setStatus] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      window.innerWidth >= 960 ? setMobile(false) : setMobile(true)
  
      window.addEventListener(
        "resize",
        () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
      );
    }, []);

  return (
   
    <div className='items-center justify-center m-5' >

    {status && (

        <div className={`servicioEfect relative top-0 before:transition delay-150 duration-300 ease-in-out `} style={{
                maxWidth: '25rem',
                minWidth: '15rem',
                height: mobile ? '10rem' : '15rem',
                left: '0',
                top: '0px',
                borderRadius: '20px',
                margin: '1.3%',
                boxSizing: 'border - box',
                background: '#FFFFFF',
                border: '2px solid #06D7F9',

              }} >
                <p className='justify-center m-auto  text-[#225890]'
                  style={{ lineHeight: '18px', fontFamily: 'Poppins', fontSize: '14px', padding: '5%' }}>{text} </p>

                <button className='flex flex-col items-end absolute' style={{ left: '90%', top: "80%", margin: '0 14px 14px 0' }} onClick={() => setStatus(!status)} >
                <img src={circulo2} alt="circulo" />
                </button>
            </div>
        )} 
                 
        {!status &&  (
  

             <div className={`servicioEfect flex ${background} bg-center bg-cover relative top-0 before:transition delay-150 duration-300 ease-in-out`} style={{
              maxWidth: '25rem',  
              minWidth: '18rem',
                height: mobile ? '10rem' : '15rem',
                left: '0',
                top: '0px',
                borderRadius: '20px',
                margin: '1.3%',
                boxSizing: 'border - box',
                border: '2px solid #06D7F9',
              }} >
       <h3 className='justify-center m-auto'
                  style={{ fontWeight: 700, lineHeight: '45px', fontFamily: 'Poppins', fontSize: '30px', color: '#FFFFFF' }}>{title} </h3>  
                <button className='flex flex-col items-end absolute transition delay-500 ' style={{ left: '90%', top: "80%", margin: '0 14px 14px 0' }} onClick={() => setStatus(!status)} >
                  <img src={circulo} alt="circulo" />
                </button>

              </div>
        )} 

</div>


  )
}

export default ServiceCard