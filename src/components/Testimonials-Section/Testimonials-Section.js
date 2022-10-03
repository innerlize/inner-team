import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import './Testimonials-Section.css';

function TestimonialsSection() {
	return(
		<section className='px-[199px] pt-[100px] pb-[50px] bg-[#FFFFFF] text-center'>
			<div className='mb-[71px]'>
			<h5 className='text-[#06D7F9] mb-[5px] font-semibold'>Testimonios</h5>
			<h3 className='text-[#225890] text-4xl font-semibold'>Lo que nuestros clientes dicen</h3>
				
			</div>
			<Glider className='mr-[-32px] rounded-[10px]'
  hasDots
  slidesToShow={2}
>
  <div className='mr-[32px] text-left px-[23px] py-[30px] bg-[#624599] rounded-[10px] mb-[30px]'>
  	<p className='text-[16px] mb-[25px]'>« Necesitaba empezar a facturar a mi cliente en el exterior, en inner-team me ayudaron con el proceso de inscripción y facturación, ahora llevan mi administración y mis impuestos ¡los recomiendo! »</p>
  	<div>
  		<p className='font-semibold'>Carolina</p>
  		<p className='text-[14px]'>Comunicadora Social</p>
  	</div>
  </div>
  <div className='mr-[32px] text-left px-[23px] py-[30px] bg-[#624599] rounded-[10px] mb-[30px]'>2</div>
  <div className='mr-[32px] text-left px-[23px] py-[30px] bg-[#624599] rounded-[10px] mb-[30px]'>3</div>
  <div className=' text-left px-[23px] py-[30px] bg-[#624599] rounded-[10px] mb-[30px]'>4</div>
</Glider>
		</section>
	)
}


export default TestimonialsSection;