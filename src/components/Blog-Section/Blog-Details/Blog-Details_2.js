import React from 'react';
import { Link } from 'react-router-dom';


export default function BlogDetails2() {
	return(
		<section className='relative w-full h-full bg-[#225890]'>

			<div className='px-[16px] lg:px-[220px] py-[100px]'>

				<div className='mb-[100px]'>
					<div className='flex items-center gap-[30px]'>
						<svg width="40" height="45" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.14352 42.746L21.0205 22.9092" stroke="#06D7F9" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M3.92095 3.01343L21.0205 22.9097" stroke="#06D7F9" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M18.3307 42.676L35.2124 22.8391" stroke="#54E280" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M18.1128 2.94312L35.2124 22.8394" stroke="#54E280" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
						</svg>

						<h3 className='text-[40px] font-semibold'>Blog</h3>
					</div>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[32px] font-semibold mb-[44px]'>Monotributo</h5>
					<h6 className='text-[#06D7F9] font-medium'>Lo que tenés que saber</h6>
				</div>

				<div>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué es y cómo funciona?</h5>
					<p className='font-light mb-[44px] leading-[35px]'>Este régimen inicio en 1998, es un régimen simplificado que recauda en una cuota mensual fija aportes impositivos, jubilatorios y a la obra social. El monto del aporte mensual y los parámetros de cada categoría los establece AFIP anualmente.</p>
					<p className='font-light leading-[35px]'>Cada contribuyente tiene obligación de recategorizarse semestralmente informando sus operaciones para confirmar o cambiar de categoría. Las categorías se calculan según los ventas y gastos/costos operativos del contribuyente que, puede ser una persona física o una sociedad de hecho. Esta figura también te permite tener empleados en relación de dependencia y desarrollar hasta 3 actividades, siempre que te encuentres dentro de los límites de facturación anual</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Inscribirse por primera vez</h5>
					<p className=' font-light leading-[35px]'>Al inscribirte por primera vez, se anualizan tus ingresos para determinar la categoría adecuada a tu actividad o si no fuera posible, inicias en la categoría más baja y luego vas evaluando con tu contador/a tu evolución.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Si tus ingresos superan los límites de tu categoría</h5>
					<p className='font-light leading-[35px]'>Cuando tus ingresos superan los limites del régimen, pasas al régimen general como responsable inscripto o formando una sociedad, en ese momento los aportes jubilatorios y los impuestos se calculan por separado según corresponda a tu actividad económica.</p>
				</div>

				<p className='mb-[44px] font-light leading-[35px]'>Puedes <span className='font-medium text-[#06D7F9]'>consultarnos</span> sobre este tema y otro relacionados por mail info@inner-team.com o por whatsapp</p>

				<p className='font-light'>Fuentes y links relacionados: <a className='underline'>https://monotributo.afip.gob.ar/Public/landing-monotributo.aspx</a></p>

				<Link to='/blog/details1' className='text-[#54E280] font-light'>- Entrada anterior</Link> <Link to='/blog/details3' className='text-[#54E280] font-light'>Entrada siguiente ></Link>
			</div>

		</section>
	)
}