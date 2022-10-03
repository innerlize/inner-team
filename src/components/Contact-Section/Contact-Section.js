import React from 'react';


function ContactSection() {
	return(
		<section className='px-[150px] py-[92px]'>
			<div className='flex p-[70px] bg-[#225890] rounded-[20px]'>
				<div className='w-[50%]'>
					<h5 className='text-[#54E280] text-[32px] mb-[28px] font-semibold'>Contactanos</h5>
					<p className='mb-[34px]'>Envíanos tu consulta desde aquí, en <br /> breve te responderemos.</p>
					<div className='flex mb-[24px]'>
						<div className='mr-[8px]'>L</div>
						<p>+5491159969456 <br /> (Mensaje de texto o voz)</p>
					</div>
					<div className='flex'>
						<div className='mr-[8px]'>L</div>
						<p>info@inner-team.com</p>
					</div>
				</div>

				<div className='w-[50%]'>
					<form action="">
						<div className='flex justify-between gap-[20px]'>
							<input className='w-[50%] h-[55px] p-[15px] rounded-[10px]' type="text" placeholder='Nombre' />
							<input className='w-[50%] h-[55px] p-[15px] rounded-[10px]' type="text" placeholder='Apellidos' />
						</div>
						<div>
							<input className='w-[100%] h-[55px] mt-[21px] mb-[27px] p-[15px] rounded-[10px]' type="mail" placeholder='Correo electrónico' />
						</div>
						<div className='h-[157px]'>
							<textarea className='w-[100%] h-[157px] p-[15px] rounded-[10px]' type="text" placeholder='Ingresa tu consulta' />
						</div>

						<button className='mt-[49px] px-[28px] py-[15px] bg-[#54E280] rounded-[10px] text-[#225890] font-semibold' type='submit'>Enviar consulta</button>
					</form>
				</div>
			</div>
		</section>
	)
}


export default ContactSection;