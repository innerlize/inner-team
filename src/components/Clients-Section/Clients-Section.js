import React from 'react';
import clientsLogos from './Clients-Logos/Clients-Logos.js';
import './Clients-Section.css';


function ClientsSection() {
	return(
		<section className='px-[16px] lg:px-[148px] py-[50px] text-center'>
			<h5 className='text-[#624599] text-[14px] lg:text-[18px] mb-[22px] font-medium'>Participamos y/o hemos trabajado en:</h5>
			<div className='images-container flex overflow-x-scroll gap-[20px] px-[50px] lg:justify-between lg:gap-[0] lg:overflow-auto'>
				{
					clientsLogos.map(logo => {
						return <img src={logo} className='w-[80px] h-[80px] lg:w-[5vw]' />
					})
				}
			</div>
		</section>
	)
}


export default ClientsSection;