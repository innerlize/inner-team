import React from 'react';


function FooterSection() {
	return(
		<section className='lg:shadow-[0_-4px_16px_rgba(0,0,0,0.15)]'>

			<div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[26px] lg:gap-[0] px-[16px] lg:w-[78%] mx-auto lg:px-[initial] pt-[22px] pb-[31px] border-b-[1px] border-[#CCCCCC]'>

				<div className='hidden lg:block w-[148px]'>
					<img src="./Logos/inner-team.svg" />
				</div>

				<div className='text-center w-[190px]'>
					<p className='mb-[16px] text-[#225890] font-semibold'>Seguinos en</p>
					<div className='flex justify-between'>
						<a href="https://www.facebook.com/inner.team.ar/" className='flex justify-center items-center w-[45px] h-[45px] rounded-full leading-[45px] bg-[#225890] transition-[all] duration-[300ms] hover:bg-[#06D7F9]'>
							<svg width="13" height="22" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.82058 23.4119V12.7921H0.779785V8.96852H3.82058V5.70264C3.82058 3.13629 5.6168 0.779541 9.75565 0.779541C11.4314 0.779541 12.6706 0.927896 12.6706 0.927896L12.5729 4.49851C12.5729 4.49851 11.3092 4.48715 9.93015 4.48715C8.43761 4.48715 8.19849 5.12233 8.19849 6.17657V8.96852H12.6916L12.4961 12.7921H8.19849V23.4119H3.82058Z" fill="white"/>
							</svg>
						</a>
						<a href="https://www.instagram.com/inner.team.ar/" className='flex justify-center items-center w-[45px] h-[45px] rounded-full leading-[45px] bg-[#225890] transition-[all] duration-[300ms] hover:bg-[#06D7F9]'>
						<svg width="22" height="22" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.0028 6.78106C10.2846 6.78106 7.28548 9.78086 7.28548 13.4999C7.28548 17.219 10.2846 20.2188 14.0028 20.2188C17.7211 20.2188 20.7202 17.219 20.7202 13.4999C20.7202 9.78086 17.7211 6.78106 14.0028 6.78106ZM14.0028 17.8681C11.6 17.8681 9.63568 15.9091 9.63568 13.4999C9.63568 11.0907 11.5942 9.13178 14.0028 9.13178C16.4115 9.13178 18.37 11.0907 18.37 13.4999C18.37 15.9091 16.4057 17.8681 14.0028 17.8681ZM22.5618 6.50622C22.5618 7.37751 21.8602 8.07337 20.995 8.07337C20.1239 8.07337 19.4282 7.37166 19.4282 6.50622C19.4282 5.64078 20.1297 4.93907 20.995 4.93907C21.8602 4.93907 22.5618 5.64078 22.5618 6.50622ZM27.0108 8.09676C26.9114 5.99748 26.432 4.13796 24.8944 2.60589C23.3627 1.07383 21.5036 0.594328 19.4048 0.489072C17.2417 0.366273 10.7582 0.366273 8.59504 0.489072C6.50208 0.588481 4.64297 1.06798 3.1054 2.60004C1.56783 4.13211 1.09428 5.99164 0.989051 8.09091C0.86628 10.2545 0.86628 16.7395 0.989051 18.9031C1.08844 21.0023 1.56783 22.8619 3.1054 24.3939C4.64297 25.926 6.49623 26.4055 8.59504 26.5108C10.7582 26.6336 17.2417 26.6336 19.4048 26.5108C21.5036 26.4114 23.3627 25.9319 24.8944 24.3939C26.4262 22.8619 26.9055 21.0023 27.0108 18.9031C27.1336 16.7395 27.1336 10.2604 27.0108 8.09676ZM24.2163 21.2246C23.7603 22.3707 22.8775 23.2537 21.7258 23.7156C20.0011 24.3998 15.9087 24.2419 14.0028 24.2419C12.097 24.2419 7.99872 24.3939 6.27992 23.7156C5.13405 23.2595 4.25127 22.3765 3.78941 21.2246C3.1054 19.4995 3.26325 15.4062 3.26325 13.4999C3.26325 11.5936 3.11125 7.49446 3.78941 5.77528C4.24542 4.62915 5.12821 3.74617 6.27992 3.28421C8.00457 2.60004 12.097 2.75793 14.0028 2.75793C15.9087 2.75793 20.007 2.60589 21.7258 3.28421C22.8716 3.74032 23.7544 4.6233 24.2163 5.77528C24.9003 7.50031 24.7424 11.5936 24.7424 13.4999C24.7424 15.4062 24.9003 19.5054 24.2163 21.2246Z" fill="white"/>
						</svg>
						</a>
						<a href="https://www.linkedin.com/company/inner-team/" className='flex justify-center items-center w-[45px] h-[45px] rounded-full leading-[45px] bg-[#225890] transition-[all] duration-[300ms] hover:bg-[#06D7F9]'>
							<svg width="22" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.60364 21.0547V7.24595H1.0075V21.0547H5.60364ZM3.30617 5.35946C4.90892 5.35946 5.90656 4.29911 5.90656 2.97402C5.8767 1.61906 4.90898 0.588135 3.33658 0.588135C1.76442 0.588135 0.736328 1.61908 0.736328 2.97402C0.736328 4.29917 1.73372 5.35946 3.27616 5.35946H3.30602H3.30617ZM8.1476 21.0547H12.7437V13.3432C12.7437 12.9305 12.7736 12.5182 12.895 12.2232C13.2272 11.3986 13.9835 10.5446 15.2531 10.5446C16.9163 10.5446 17.5816 11.8109 17.5816 13.6672V21.0546H22.1775V13.1368C22.1775 8.89529 19.91 6.92176 16.886 6.92176C14.4066 6.92176 13.318 8.30575 12.7132 9.24838H12.7438V7.24566H8.1477C8.20802 8.5414 8.1477 21.0544 8.1477 21.0544L8.1476 21.0547Z" fill="white"/>
							</svg>
						</a>
					</div>
				</div>

				<div className='flex flex-col align-center text-center'>
					<h6 className='text-[#225890] font-semibold lg:hidden'>Newsletter</h6>
					<p className='text-[13px] lg:text-[16px] mb-[20px] lg:mb-[16px] text-[#225890] lg:font-semibold'>Suscribite a nuestro Newsletter</p>
					<div className='flex justify-center relative'>
						<input type="mail" placeholder='Correo electrónico' className='focus:outline-none text-[#225890] text-[12px] lg:text-[14px] w-[270px] lg:w-[100%] p-[16px] lg:p-[8.5px] border-[2px] border-[#225890] rounded-[10px]' />
						<button type='submit' className='absolute right-0 h-[100%] p-[16px] lg:p-[8.5px] text-[#F2F2F2] bg-[#225890] rounded-[10px] transition-[all] duration-[300ms] hover:bg-[#06D7F9]'>
							<img src="./Logos/arrow.svg" className='w-[22px] h-[22px]' />
						</button>
					</div>
				</div>

			</div>

			<div className='text-center pt-[20px] pb-[63px] lg:pt-[31px] lg:pb-[23px] font-semibold'>
				<p className='text-[#225890]'>Copyright © {new Date().getFullYear()}. inner-team.</p>
			</div>

		</section>
	)
}


export default FooterSection;