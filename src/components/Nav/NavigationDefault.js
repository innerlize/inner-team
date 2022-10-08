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

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [changeNav, setChangeNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#home" className="flex items-center hover:text-[#06D7F9]" style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: '24px', fontFamily: "Poppins"
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
          lineHeight: '24px', fontFamily: "Poppins"
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
        <a href="#servicios" className="flex items-center hover:text-[#06D7F9]" style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: '24px', fontFamily: "Poppins"
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
        <a href="#Blog" className="flex items-center hover:text-[#06D7F9]" style={{
          fontWeight: "500px", fontSize: '16px',
          lineHeight: '24px', fontFamily: "Poppins"
        }}>
          Blog
        </a>
      </Typography>
    </ul>
  );

  return (

    <Navbar className="mx-auto w-[100%] fixed top-0" 
    style={{ zIndex: '99999', 
    background:  changeNav ? 'rgba(255, 255, 255, .15)' : "#FFFFFF",
    backdropFilter: changeNav ? 'blur(15px)' : null,
    color:"#225890",
    border: '0', 
    minHeight: '110px',
    }}>

      <div className="hidden lg:inline-block w-[100%] ">

        <div className=" flex items-center justify-between text-blue-gray-900 w-100" style={{ background: '#225890', padding: '0', margin: '0', maxHeight: "35px" }}>

          <div className="flex items-center gap-4 ml-[11%] pb-3 pt-2" style={{ color: "#FFFFFF" }}>
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fa-light fa-envelope mr-3 ml-2"></i>
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
                <i className="fab fa-whatsapp mr-2" />
                +5491159969456
              </Typography>
            </Tooltip>
          </div>
          <div className="flex items-center gap-6 mr-[12%] pb-3 pt-2" style={{ color: "#FFFFFF" }}>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.facebook.com/inner.team.ar/"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-facebook" />
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
                <i className="fab fa-instagram" />
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
                <i className="fab fa-linkedin" />
              </Typography>
            </Tooltip>
          </div>

        </div>
      </div>

      <div className="container flex align-middle items-center justify-between text-blue-gray-900 mt-[1%]">

          <div className="flex items-center gap-2">
          <a href="#home">
          <img src={azul} alt="inner-team-logo" href='#home' className="align-middle items-center justify-center ml-[40%] mt-[1%]" style={{ width: '100%', height: '100%' }} />
          </a>
          </div>

        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block w-[15%] h-[45px] text-white mr-[10%] bg-[#225890] hover:bg-[#06D7F9]" style={{ borderRadius: '12px' }}>
          <span>Contactenos</span>
        </Button>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-[#225890] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden pr-[114px] "
          style={{zIndex:''}}
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
      <MobileNav  open={openNav} >
        {navList}
        <Button variant="gradient" size="sm" className="ml-[20%] mb-[6%] w-[40%] justify-center items-center h-[15%] text-white mr-[10%] bg-[#225890] hover:bg-[#06D7F9]" style={{ borderRadius: '12px' }}>
          <span>Contactanos</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}