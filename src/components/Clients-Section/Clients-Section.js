import React from 'react';
import clientsLogos from './Clients-Logos/Clients-Logos.js';


function ClientsSection() {
	return(
		<section className='px-[148px] py-[50px] text-center'>
			<h5 className='text-[#624599] text-[18px] mb-[22px] font-medium'>Participamos y/o hemos trabajado en:</h5>
			<div className='flex justify-evenly'>
				{
					clientsLogos.map(logo => {
						return <img width='50px' height='50px' src={logo} />
					})
				}
			</div>
		</section>
	)
}


export default ClientsSection;