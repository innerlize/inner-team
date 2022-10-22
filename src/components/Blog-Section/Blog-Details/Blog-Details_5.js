import React from 'react';
import { Link } from 'react-router-dom';


export default function BlogDetails4() {
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
					<h5 className='text-[32px] font-semibold mb-[44px]'>Auditoria Interna (AI) y de gestión</h5>
					<h6 className='text-[#06D7F9] font-medium'>Lo que tenés que saber</h6>
				</div>

				<div>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué es una auditoria interna?</h5>
					<p className='font-light leading-[35px]'>Una auditoria interna y de gestión implica el análisis económico y financiero de tus operaciones. También puede incluir la revisión del cumplimiento de obligaciones impositivas, previsionales y societarias. Se realiza con el objetivo detectar áreas susceptibles de mejoras, para implementarlas a tiempo.</p>
					<p className='font-light mt-[44px] leading-[35px]'>Es diferente a una Auditoria de Estados Contables, porque es privada y brinda información confidencial.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Cuándo necesitas una auditoria interna?</h5>
					<p className=' font-light leading-[35px]'>Resulta imprescindible ante reclamos o intimaciones de los organismos de control, cuando hay obligaciones societarias, impositivas o previsionales, pendientes de presentación y pago.</p>
					<p className=' font-light leading-[35px] my-[44px]'>Es recomendable en situaciones de cambio o luego de atravesarlas, por ejemplo si pensás iniciar una actividad nueva, una AI te va a ayudar a conocer la situación de tu negocio y el riesgo que puede asumir. Esta información es clave para decidir afrontar el desarrollo de nuevos servicios o inversiones.</p>
					<p className=' font-light leading-[35px]'>La AI también se recomienda cuando ingresa o se retira un socio, o cuando cambia la persona que lleva la administración.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué beneficios ofrece?</h5>
					<p className='font-light leading-[35px] mb-[44px]'>Por ejemplo, una revisión general de los números del negocio te permite analizar y ajustar si es necesario los precios-costos de tus productos y servicios para mejorar su rentabilidad. El ajuste puede representar tomar diferentes situaciones, como cambiar un proveedor, un proceso, un producto o incluso el tipo de cliente. Estás decisiones suelen ser difíciles de distinguir para las personas que trabajan todos los días en la operación.</p>
					<p className='font-light leading-[35px]'>Una AI nos permite tomar decisiones en base al análisis del negocio realizado por un profesional ajeno a la empresa y por lo tanto más objetivo.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Funciona para servicios profesionales?</h5>
					<p className='font-light leading-[35px] mb-[44px]'>¡Sí! La AI funciona para servicios profesionales brindados por contribuyentes monotributo, responsables inscriptos o empresas. En cada caso cambian los procedimientos que realizamos como consultores, pero a todos les resulta muy útil contar con la información que la AI brinda.</p>
					<p className='font-light leading-[35px]'>Una AI nos permite tomar decisiones en base al análisis del negocio realizado por un profesional ajeno a la empresa y por lo tanto más objetivo.</p>
				</div>

				<p className='mb-[44px] font-light leading-[35px]'>Puedes <span className='font-medium text-[#06D7F9]'>consultarnos</span> sobre este tema y otro relacionados por mail info@inner-team.com o por whatsapp</p>

				<div className='mt-[120px]'>
					<Link to='/blog/details4' className='text-[#54E280] font-light'>- Entrada anterior</Link>
				</div>
			</div>

		</section>
	)
}