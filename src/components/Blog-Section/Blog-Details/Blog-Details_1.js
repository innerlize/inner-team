import React from 'react';
import { Link } from 'react-router-dom';


export default function BlogDetails1() {
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

						<h3 className='text-[40px] font-semibold'><Link to='/blog'>Blog</Link></h3>
					</div>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[32px] font-semibold mb-[44px]'>Ingresos brutos</h5>
					<h6 className='text-[#06D7F9] font-medium'>Lo que tenés que saber</h6>
				</div>

				<div>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué es?</h5>
					<p className='font-light leading-[35px]'>El impuesto a los ingresos brutos se calcula por actividad y por jurisdicción, en este sentido es importante conocer el domicilio donde el cliente va a disponer del servicio.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Regímenes vigentes</h5>
					<p className='mb-[44px] font-light leading-[35px]'>Existen dos regímenes para este tributo, el correspondiente a la jurisdicción de tu domicilio también llamada local y el régimen de convenio multilateral, que es un régimen mediante el cual podes en una sola ddjj calcular los impuestos de más de una jurisdicción, por ejemplo si prestas servicios en CABA y en provincia de BsAs te corresponde utilizar este régimen.</p>
					<p className='font-light leading-[35px]'>Cada jurisdicción legisla sobre las alícuotas que tributa cada actividad y emite regulación específica, tales como regímenes de promoción y/o exenciones. Es importante que analices con tu contadorx que régimen es el más apropiado para tu actividad, también es muy recomendable analizar a cada cliente y sobre todo a los nuevos, para declarar correctamente los ingresos en cada jurisdicción y así evitar requerimientos, reclamos y/o multas.</p>
				</div>

				<p className='mb-[44px] font-light leading-[35px]'>Puedes <span className='font-medium text-[#06D7F9]'>consultarnos</span> sobre este tema y otro relacionados por mail info@inner-team.com o por whatsapp</p>

				<p className='font-light'>Fuentes y links relacionados: <a className='underline'>https://ca.gov.ar/</a> , <a className='underline'>https://web.arba.gov.ar/</a> , <a className='underline'>https://www.agip.gob.ar/</a></p>

				<div className='flex flex-row-reverse mt-[120px]'>
					<Link to='/blog/details2' className='text-[#54E280] font-light'>Entrada siguiente ></Link>
				</div>
			</div>

		</section>
	)
}