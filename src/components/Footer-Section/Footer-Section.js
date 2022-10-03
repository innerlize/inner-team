import React from 'react';


function FooterSection() {
	return(
		<section className='shadow-[0_-4px_16px_rgba(0,0,0,0.15)] bg-[#222222]'>
			<div className='flex justify-between items-center w-[78%] mx-auto pt-[22px] pb-[31px] border-b-[1px] border-[#F2F2F2]'>
				<div className='w-[148px]'>
					L
				</div>
				<div className='text-center w-[190px]'>
					<p className='mb-[16px]'>Seguinos en</p>
					<div className='flex justify-between'>
						<a href="">F</a>
						<a href="">I</a>
						<a href="">L</a>
					</div>
				</div>
				<div>
					<p className='mb-[16px]'>Suscribite a nuestro Newsletter</p>
					<div>
						<input type="mail" placeholder='Correo electrónico' />
						<button type='submit'>></button>
					</div>
				</div>
			</div>
			<div className='text-center pt-[31px] pb-[23px]'>
				<p>Copyright © {new Date().getFullYear()}. inner-team.</p>
			</div>
		</section>
	)
}


export default FooterSection;