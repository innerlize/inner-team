import { Button, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react';
import recurso1 from './recurso1.webp'
import style from './style.css'

export default function Header() {

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        window.innerWidth >= 960 ? setMobile(false) : setMobile(true);
        window.addEventListener(
            "resize",
            () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
        );
    }, []);

    return (
        <section id='home'>
            <div className="select-BG bg-center bg-cover w-[100%] h-[80vh] flex items-end align-middle"
                style={{
                    justifyContent: mobile ? "center" : "start"
                }} >

                <div className="mt-[30%]" style={{ marginLeft: mobile ? "0" : "10%" }}>
                    <Typography variant="h2" style={{
                        fontFamily: 'Poppins',
                        fontSize: mobile ? '29px' : '45px',
                        fontWeight: '600',
                        lineHeight: '50px',
                        letterSpacing: '-0.025em',
                        color: '#FFFFFF',
                        textAlign: mobile ? 'center' : 'left'

                    }}  > Vende tus servicios profesionales <br /> desde Argentina </Typography>

                    <div className="text-white w-full mt-[10px] text-start">
                        <Typography variant="lead" className="mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: mobile ? '12px' : '16px',
                                textAlign: mobile ? 'center' : 'left'
                            }}>
                            Sumá nuestro apoyo en servicios <br /> administrativos, consultoría estratégica y coaching.
                        </Typography>
                        <div className=" flex flex-wrap mt-[20px] mb-[10%]"
                        style={{
                            marginLeft: mobile ? "10%" : "0%",
                            maxWidth: '100%'
                        }}>
                            <img src={recurso1} alt="recurso1" className="w-[10%] h-[3%] mr-4" />
                            <Button variant="gradient" size="lg"  className="w-[30%] h-[45px] text-white mr-[10%] bg-[#FFFFFF] hover:bg-[#06D7F9]" style={{  borderRadius: '12px', padding: '8px 10px 8px 10px ',transition: 'all .5s ease-in-out', hover: 'background-color: #06D7F9', width: mobile ? '45%' : '30%' }} >
                                <span className='text-[#225890]' style={{transition: 'all .4s ease-in-out', hover: 'background-color: #06D7F9'  }}
                                onClick={() => { window.location.href = "/#contacto" }}>
                                Contáctanos</span>
                            </Button>
         
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
