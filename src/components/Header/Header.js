import { Button, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react';
import recurso1 from './recurso1.webp'
import style from './style.css'

export default function Header() {

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => { window.innerWidth >= 960 ? setMobile(false) : setMobile(true) },
        );
    }, []);

    return (
        <section id='home'>
            <div className="select-BG bg-center bg-cover w-[100%] h-[100vh] flex items-end align-middle"
                style={{
                    justifyContent: mobile ? "center" : "start"
                }} >

                <div className="mt-[30%] ml-[10%]  ">
                    <Typography variant="h2" style={{
                        fontFamily: 'Poppins',
                        fontSize: mobile ? '29px' : '45px',
                        fontWeight: '600',
                        lineHeight: '50px',
                        letterSpacing: '-0.025em',
                        color: '#FFFFFF',
                        textAlign: mobile ? 'center' : 'left'

                    }}  >Somos expertos en <br /> atencion a profesionales </Typography>

                    <div className="text-white w-full mt-[10px] text-start">
                        <Typography variant="lead" className="mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: mobile ? '12px' : '16px',
                                textAlign: mobile ? 'center' : 'left'
                            }}>
                            Nuestra experiencia nos permite brindar <br /> servicios de capacitación, coaching y consultoría.
                        </Typography>
                        <div className=" flex flex-wrap w-[100%] mt-[20px] mb-[10%]">
                            <img src={recurso1} alt="recurso1" className="w-[10%] h-[3%] mr-4" />
                            <Button variant="gradient" size="lg" className=" hover:bg-[#06D7F9]" style={{ background: "white", color: "#225890", borderRadius: '12px', padding: '8px 10px 8px 10px ' }}>
                                <span>Contactanos</span>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
