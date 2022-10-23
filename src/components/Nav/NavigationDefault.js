import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import azul from './azul.svg';
import {Mail, Facebook, Instagram, Linkedin, PhoneCall} from 'react-feather';

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [changeNav, setChangeNav] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {

  window.innerWidth >= 960 ? setMobile(false) : setMobile(true);


    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= 960) {
          setOpenNav(false)
          setMobile(false)
        } else {
          setMobile(true)
        }
      },
    );
    const handleScroll = () => {
      window.scrollY >= 1000 ? setChangeNav(true) : setChangeNav(false);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navList = (
    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#home" className="flex items-center hover:text-[#06D7F9] active:text-#06D7F9" style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: mobile ? '10px' :'24px', fontFamily: "Poppins",
          color: "#225890"
        }}>
          Inicio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#Nosotros" className="flex items-center hover:text-[#06D7F9] " style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: mobile ? '15px' :'24px', fontFamily: "Poppins",
          color: "#225890"
        }}>
          Nosotros
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#servicios" className="flex items-center hover:text-[#06D7F9]  " style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: mobile ? '15px' :'24px', fontFamily: "Poppins",
          color: "#225890"
        }}>
          Servicios
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="Blog" className="flex items-center hover:text-[#06D7F9]" style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: mobile ? '15px' :'24px', fontFamily: "Poppins",
          color: "#225890"
        }}>
          Blog
        </a>
      </Typography>
    </ul>
  );

  return (

    <Navbar className="mx-auto w-[100%] sticky top-0"
      style={{
        zIndex: '99999',
        background: changeNav ? 'rgba(255, 255, 255, .15)' : "#FFFFFF",
        backdropFilter: changeNav ? 'blur(15px)' : null,
        color: "#225890",
        border: '0',
        minHeight: !mobile ? '110px' : '10%'
      }}>

      <div className="hidden lg:inline-block w-[100%] ">

        <div className=" flex items-center justify-between text-blue-gray-900 w-100" style={{ background: '#225890', padding: '0', margin: '0', maxHeight: "35px" }}>

          <div className="flex items-center gap-4 ml-[11%] pb-3 pt-2" style={{ color: "#FFFFFF" }}>
            <Tooltip content="Like">
              <Typography
                as="a"
                href="mailto:info@inner-team.com"
                variant="lead"
                color="blue"
                textGradient
              >
             <Mail size={15} color="#FFFFFF" style={{display: 'inline-block', marginRight:'8px'}}/>
                info@inner-team.com
              </Typography>
            </Tooltip>
            <Tooltip content="Follow" color="white" >
              <Typography
                as="a"
                href="https://api.whatsapp.com/send?phone=5491159969456&text=Hola%20Inner%20!%20Tengo%20una%20consulta%20sobre%20"
                variant="lead"
                color="white"
                textGradient
              >
                <PhoneCall size={15} color="#FFFFFF" style={{display: 'inline-block', marginRight:'8px'}}/>
                +5491159969456
              </Typography>
            </Tooltip>
          </div>
          <div className="flex items-center gap-6 mr-[20%] pb-3 pt-2" style={{ }}>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.facebook.com/inner.team.ar/"
                variant="lead"
                color="purple"
                textGradient
              >
                  <Facebook/>
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.instagram.com/inner.team.ar/"
                variant="lead"
                color="purple"
                textGradient
              >
                <Instagram />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.linkedin.com/company/inner-team/"
                variant="lead"
                color="purple"
                textGradient
              >
                <Linkedin/>
              </Typography>
            </Tooltip>
          </div>

        </div>
      </div>

      <div className="container flex align-middle items-center justify-between text-blue-gray-900 mt-[1%]">

        <div className="flex items-center gap-2">
          <a href="/">
            <img src={azul} alt="inner-team-logo" href='#home'
              className="align-middle items-center justify-center"
              style={{
                width: mobile ? '50%' : '100%',
                height:mobile ? '50%' : '100%',
                marginLeft: mobile ? '10%' : '40%',
                marginTop: mobile ? '10%' : '1%',
              }} />
          </a>
        </div>

        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block w-[15%] h-[45px] text-white mr-[10%] bg-[#225890] hover:bg-[#06D7F9]" style={{ borderRadius: '12px' }}>
          <span>Contactenos</span>
        </Button>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-[#225890] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          style={{ paddingRight: mobile ? '10%' : '114px' }}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav 
        open={openNav} 

      >
        {navList}
        <Button variant="gradient" size="sm" className="ml-[1%] w-[30%]  h-[15%] text-white mr-[2%] bg-[#225890] hover:bg-[#06D7F9]" style={{ 
          borderRadius: '12px',
          left:'35%',
          }}>
          <span>Contactanos</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}