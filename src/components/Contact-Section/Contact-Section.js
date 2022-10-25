import React from 'react';


function ContactSection() {
	return(
		<section className='lg:px-[150px] lg:py-[92px]' id='contacto'>
			<div className='flex flex-col px-[16px] py-[50px] bg-[#225890] lg:flex-row lg:p-[70px] lg:rounded-[20px]'>
				<div className='mb-[43px] lg:mb-[0] lg:w-[40%]'>
					<h5 className='text-[22px] text-[#54E280] lg:text-[32px] lg:mb-[28px] font-semibold'>Contactanos</h5>
					<p className='text-[14px] lg:text-[16px] my-[16px] lg:mb-[34px]'>Envíanos tu consulta desde aquí, en <br /> breve te responderemos.</p>
					<div className='flex mb-[8px] lg:mb-[24px]'>
						<div className='mr-[8px]'>
							<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_275_3561)">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.415 15.1145C17.117 14.9655 15.656 14.2475 15.384 14.1475C15.112 14.0485 14.914 13.9995 14.715 14.2975C14.517 14.5935 13.948 15.2635 13.775 15.4615C13.601 15.6605 13.428 15.6845 13.131 15.5365C12.834 15.3865 11.876 15.0735 10.741 14.0615C9.858 13.2735 9.261 12.3005 9.088 12.0025C8.915 11.7055 9.069 11.5445 9.218 11.3965C9.352 11.2635 9.515 11.0495 9.664 10.8765C9.813 10.7025 9.862 10.5785 9.961 10.3795C10.061 10.1815 10.011 10.0085 9.936 9.85946C9.862 9.71046 9.268 8.24746 9.02 7.65246C8.779 7.07346 8.534 7.15246 8.352 7.14246C8.178 7.13446 7.98 7.13246 7.782 7.13246C7.584 7.13246 7.262 7.20646 6.99 7.50446C6.717 7.80146 5.95 8.52046 5.95 9.98346C5.95 11.4455 7.014 12.8585 7.163 13.0575C7.312 13.2555 9.258 16.2575 12.239 17.5445C12.949 17.8505 13.502 18.0335 13.933 18.1695C14.645 18.3965 15.293 18.3645 15.805 18.2875C16.375 18.2025 17.563 17.5685 17.811 16.8745C18.058 16.1805 18.058 15.5855 17.984 15.4615C17.91 15.3375 17.712 15.2635 17.414 15.1145H17.415ZM11.993 22.5175H11.989C10.2184 22.5178 8.48037 22.0418 6.957 21.1395L6.597 20.9255L2.855 21.9075L3.854 18.2595L3.619 17.8855C2.62914 16.3098 2.10529 14.4862 2.108 12.6255C2.11 7.17546 6.544 2.74146 11.997 2.74146C14.637 2.74146 17.119 3.77146 18.985 5.63946C19.9054 6.55604 20.6349 7.64603 21.1313 8.84636C21.6277 10.0467 21.8811 11.3335 21.877 12.6325C21.875 18.0825 17.441 22.5175 11.993 22.5175V22.5175ZM20.405 4.22046C19.3032 3.11139 17.9922 2.232 16.5481 1.63326C15.1039 1.03453 13.5553 0.728346 11.992 0.732463C5.438 0.732463 0.102 6.06746 0.1 12.6245C0.096963 14.7112 0.644374 16.7618 1.687 18.5695L0 24.7325L6.304 23.0785C8.04787 24.0286 10.0021 24.5264 11.988 24.5265H11.993C18.547 24.5265 23.883 19.1915 23.885 12.6335C23.8898 11.0707 23.5848 9.52256 22.9874 8.0785C22.3901 6.63443 21.5124 5.32313 20.405 4.22046" fill="#FBFBFB"/>
								</g>
								<defs>
									<clipPath id="clip0_275_3561">
										<rect width="24" height="24" fill="white" transform="translate(0 0.732422)"/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<p className='text-[14px] lg:text-[16px] lg:flex lg:flex-col'>+5491159969456 <span>(Mensaje de texto o voz)</span></p>
					</div>
					<div className='flex'>
						<div className='mr-[8px]'>
							<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.75 4.48242H2.25C1.83516 4.48242 1.5 4.81758 1.5 5.23242V20.2324C1.5 20.6473 1.83516 20.9824 2.25 20.9824H21.75C22.1648 20.9824 22.5 20.6473 22.5 20.2324V5.23242C22.5 4.81758 22.1648 4.48242 21.75 4.48242ZM20.8125 7.0793V19.2949H3.1875V7.0793L2.54063 6.57539L3.46172 5.3918L4.46484 6.17227H19.5375L20.5406 5.3918L21.4617 6.57539L20.8125 7.0793V7.0793ZM19.5375 6.16992L12 12.0293L4.4625 6.16992L3.45938 5.38945L2.53828 6.57305L3.18516 7.07695L11.1914 13.302C11.4217 13.4808 11.7049 13.5779 11.9965 13.5779C12.2881 13.5779 12.5713 13.4808 12.8016 13.302L20.8125 7.0793L21.4594 6.57539L20.5383 5.3918L19.5375 6.16992Z" fill="white"/>
							</svg>
						</div>
						<p className='text-[14px] lg:text-[16px]'>info@inner-team.com</p>
					</div>
				</div>

				<div className='lg:w-[60%]'>
					<form action="">
						<div className='flex flex-col justify-between gap-[20px] lg:flex-row'>
							<input className='focus:outline-none text-[#225890] font-medium text-[14px] lg:text-[16px] lg:w-[50%] h-[55px] px-[21px] py-[14px] lg:p-[15px] rounded-[10px]' type="text" placeholder='Nombre' />
							<input className='focus:outline-none text-[#225890] font-medium text-[14px] lg:text-[16px] lg:w-[50%] h-[55px] px-[21px] py-[14px] lg:p-[15px] rounded-[10px]' type="text" placeholder='Apellidos' />
						</div>
						<div>
							<input className='focus:outline-none text-[#225890] font-medium text-[14px] lg:text-[16px] w-[100%] h-[55px] px-[21px] py-[14px] mt-[21px] mb-[27px] lg:p-[15px] rounded-[10px]' type="mail" placeholder='Correo electrónico' />
						</div>
						<div className='h-[157px]'>
							<textarea className='focus:outline-none text-[#225890] font-medium text-[14px] lg:text-[16px] w-[100%] h-[157px] px-[21px] py-[14px] lg:p-[15px] rounded-[10px]' type="text" placeholder='Ingresa tu consulta' />
						</div>

						<button className='w-[100%] lg:w-[initial] mt-[49px] px-[28px] py-[15px] bg-[#54E280] rounded-[10px] text-[#225890] font-semibold transition-[all] duration-[300ms] hover:bg-[#F2F2F2]' type='submit'>Enviar consulta</button>
					</form>
				</div>
			</div>
		</section>
	)
}


export default ContactSection;