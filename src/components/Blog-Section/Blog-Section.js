import React from 'react';
import BlogItem from './Blog-Item/Blog-Item.js';
import { Link } from 'react-router-dom';

function BlogSection() {

	return(
		<section className='relative w-full h-full bg-[#225890]'>

			<div className='px-[16px] lg:px-[220px] py-[100px]'>

				<div className='mb-[7px]'>
					<div className='flex items-center gap-[30px]'>
						<svg width="40" height="45" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.14352 42.746L21.0205 22.9092" stroke="#06D7F9" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M3.92095 3.01343L21.0205 22.9097" stroke="#06D7F9" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M18.3307 42.676L35.2124 22.8391" stroke="#54E280" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
							<path d="M18.1128 2.94312L35.2124 22.8394" stroke="#54E280" stroke-width="5.28194" stroke-miterlimit="10" stroke-linecap="round"/>
						</svg>

						<h3 className='text-[40px] font-semibold'><Link to='/blog'>Blog</Link></h3>
					</div>
					<h5 className='text-[20px] tracking-[1px] font-medium my-[44px]'>Info de interés contable e impositiva para profesionales prestadores de servicios independientes, en relación de dependencia y monotributistas.</h5>
				</div>

				<div className='py-[30px]'>

					<BlogItem
						topic='Ingresos Brutos'
						description= '¿Qué es? El impuesto a los ingresos brutos se calcula por actividad y por jurisdicción, en este sentido es importante conocer el domicilio donde el cliente va a disponer del servicio. Regímenes vigentes Existen dos regímenes para este tributo, el correspondiente a la jurisdicción de tu domicilio también llamada local...'
						topage={1}
					/>

					<BlogItem
						topic='Monotributo'
						description= '¿Qué es y cómo funciona? Este régimen inicio en 1998, es un régimen simplificado que recauda en una cuota mensual fija aportes impositivos, jubilatorios y a la obra social. El monto del aporte mensual y los parámetros de cada categoría los establece AFIP anualmente. Cada contribuyente tiene obligación de recategorizarse...'
						topage={2}
					/>

					<BlogItem
						topic='Exportación de Servicios'
						description= 'Que operaciones se consideran exportación de servicios, cual es su tratamiento impositivo, pros y contras, estrategia de negocios'
						topage={3}
					/>

					<BlogItem
						topic='Monotributo, SA, SAS, Sociedades, SRL'
						description= '¿Cuándo declarar el inicio de una actividad económica? El momento en que necesitas emitir tu primera factura, es cuando estás listo para formalizar tu situación ante los organismos de control y es el momento de contratar un contador para liquidar impuestos. Antes de iniciar los trámites para facturar tenés que tomar algunas decisiones en función...'
						topage={4}
					/>

					<BlogItem
						topic='Auditoria interna, gestion de empresas, Mipyme, Monotributo'
						description= 'Una auditoria interna y de gestión implica el análisis económico y financiero de tus operaciones. También puede incluir la revisión del cumplimiento de obligaciones impositivas, previsionales y societarias.'
						topage={5}
					/>

				</div>

			</div>

		</section>
	)
}

export default BlogSection;