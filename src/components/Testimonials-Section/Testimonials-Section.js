import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials-Section.css';


function TestimonialsSection() {
	return(
		<section className='px-[16px] lg:px-[14vw] pt-[100px] pb-[50px] bg-[#FFFFFF] text-center'>

			<div className='mb-[71px]'>
				<h5 className='text-[#06D7F9] mb-[5px] font-semibold'>Testimonios</h5>
				<h3 className='text-[#225890] text-[22px] lg:text-4xl font-semibold'>Lo que nuestros clientes dicen</h3>
			</div>

			<Swiper
				breakpoints={{
					1280: {
						slidesPerView: 2
					}
				}}
				spaceBetween={32}
				modules={[Pagination]}
				pagination={{ clickable: true }}
				className='rounded-[10px]'
			>
				<SwiperSlide className='flex flex-col justify-between text-left px-[17px] lg:px-[23px] py-[20px] lg:py-[30px] bg-[#624599] rounded-[10px]'>
					<p className='text-[14px] lg:text-[16px] leading-[22px]'>« Necesitaba empezar a facturar a mi cliente en el exterior, en inner-team me ayudaron con el proceso de inscripción y facturación, ahora llevan mi administración y mis impuestos ¡los recomiendo! »</p>
					<div>
						<p className='text-[12px] lg:text-[16px] font-semibold'>Carolina</p>
						<p className='text-[10px] lg:text-[14px]'>Comunicadora Social</p>
	  			</div>
				</SwiperSlide>

				<SwiperSlide className='flex flex-col justify-between text-left px-[17px] lg:px-[23px] py-[20px] lg:py-[30px] bg-[#624599] rounded-[10px]'>
					<p className='text-[14px] lg:text-[16px] leading-[22px]'>« Mi administración era un caos, nunca tenía tiempo para ordenar las cuentas, gracias a inner-team ordenamos los papeles y ahora los mantienen ordenados por mí, recomiendo ampliamente »</p>
					<div>
						<p className='text-[12px] lg:text-[16px] font-semibold'>Romina</p>
						<p className='text-[10px] lg:text-[14px]'>Abogada especialista en familia</p>
	  			</div>
	  		</SwiperSlide>

				<SwiperSlide className='flex flex-col justify-between text-left px-[17px] lg:px-[23px] py-[20px] lg:py-[30px] bg-[#624599] rounded-[10px]'>
					<p className='text-[14px] lg:text-[16px] leading-[22px]'>« Estoy muy conforme con el servicio sumamente profesional en las tareas contables, impositivas, administrativas y cuando he necesitado consultoría, lo recomiendo siempre »</p>
					<div>
						<p className='text-[12px] lg:text-[16px] font-semibold'>Carmelo</p>
						<p className='text-[10px] lg:text-[14px]'>Interprete-traductor, Marketer</p>
	  			</div>
	  		</SwiperSlide>

				<SwiperSlide className='flex flex-col justify-between text-left px-[17px] lg:px-[23px] py-[20px] lg:py-[30px] bg-[#624599] rounded-[10px]'>
					<p className='text-[14px] lg:text-[16px] leading-[22px]'>« Mi administración era un caos, nunca tenía tiempo para ordenar las cuentas, gracias a inner-team ordenamos los papeles y ahora los mantienen ordenados por mí, recomiendo ampliamente »</p>
					<div>
						<p className='text-[12px] lg:text-[16px] font-semibold'>Romina</p>
						<p className='text-[10px] lg:text-[14px]'>Abogada especialista en familia</p>
	  			</div>
	  		</SwiperSlide>
			</Swiper>

		</section>
	)
}


export default TestimonialsSection;