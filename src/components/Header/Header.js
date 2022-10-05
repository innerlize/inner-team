import { Button, Typography } from '@material-tailwind/react'
import recurso1 from './recurso1.webp'


export default function Header() {
    return (
        <section id='Home'>
        <div className="relative p-0 m-0 flex content-center items-center justify-center">
            <div className="bg-landing-background bg-center bg-cover absolute w-full h-screen" style={{backgroundAttachment:'fixed'}} />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-start flex flex-wrap">
                    <div className="w-full mt-[30%] ml-[10%] mr-auto text-center">
                        <Typography variant="h2" style={{
                            fontFamily: 'Poppins',
                            fontSize: '40px',
                            fontWeight: '600',
                            lineHeight: '50px',
                            letterSpacing: '-0.025em',
                            textAlign: 'left',
                            color: '#FFFFFF',
                        }}  >Somos expertos en <br /> atencion a profesionales </Typography>

                        <div className="text-white w-full mt-[10px] text-start">
                            <Typography variant="lead" className="mb-2">
                                Nuestra experiencia nos permite brindar <br /> servicios de capacitación, coaching y consultoría.
                            </Typography>
                            <div className=" flex flex-wrap w-[100%] mt-[20px] mb-[10%]">
                                <img src={recurso1} alt="recurso1" className="w-[3%] h-[3%] mr-4" />
                                <Button variant="gradient" size="lg" className="hidden lg:inline-block" style={{ background: "white", color: "#225890", borderRadius: '12px', padding:'8px 10px 8px 10px ' }}>
                                    <span>Contactanos</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
