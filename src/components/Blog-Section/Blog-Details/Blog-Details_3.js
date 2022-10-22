import React from 'react';
import { Link } from 'react-router-dom';


export default function BlogDetails3() {
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
					<h5 className='text-[32px] font-semibold mb-[44px]'>Exportación de Servicios Profesionales desde Argentina</h5>
					<h6 className='text-[#06D7F9] font-medium'>Lo que tenés que saber</h6>
				</div>

				<div>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué es?</h5>
					<p className='font-light leading-[35px]'>De acuerda la legislación argentina, se considera exportación de servicios a aquellos prestados desde el país, no ejecutados en relación de dependencia y que son gozados en el exterior. Ejemplos de estos servicios son las traducciones realizadas en el país para clientes en el exterior, los servicios de community manager, diseño gráfico, consultoría y/o asesoramiento según el área profesional.</p>
					<p className='font-light my-[44px] leading-[35px]'>En Argentina este tipo de prestaciones tributan al estado derechos de exportación, a excepción de los profesionales y empresas que han tramitado su certificado Mipyme que, se encuentran exceptuadas de este tributo en tanto su facturación anual no supere los 600mil usd.</p>
					<p className='font-light leading-[35px]'>Siguiendo el análisis regulatorio, es importante considerar el aspecto cambiario. En Argentina el estado regula activamente la cotización de divisas extranjeras y su forma de ingreso al país, a través del BCRA.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Aspectos relevantes: pros y contras</h5>
					<p className=' font-light leading-[35px]'>Analizando los pros y contra de exportar servicios profesionales, podemos señalar:</p>
					<p className=' font-light leading-[35px] my-[44px]'>Pros o beneficios:</p>
					<p className=' font-light leading-[35px]'>
						Diversificación de ingresos <br />
						Acceso a divisas extranjeras <br />
						Exención en ingresos brutos
					</p>
					<p className=' font-light leading-[35px] mb-[44px]'>Contras o aspectos que requieren mayor seguimiento:</p>
					<p className=' font-light leading-[35px]'>
						Legislación en destino <br />
						Socios comerciales <br />
						Ingreso de divisas al país.
					</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Como cobrar tus exportaciones</h5>
					<p className='font-light leading-[35px]'>Este año el BCRA autorizó a las personas humanas a ingresar hasta 12mil usd al año en cuentas bancarias argentinas, siempre que no hayas operado en la bolsa 90 días antes y después de recibir el dinero. Si recibís más de 12mil usd al año, el excedente el banco te lo va pesificar al tipo de cambio oficial, para luego lo acreditarlo en tu cuenta bancaria.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Otras consideraciones…</h5>
					<p className='font-light leading-[35px]'>El desarrollo de mercados en el extranjero requiere estrategias comerciales a mediano y largo plazo. En general el acceso al mercado internacional es más laborioso que el ingreso y la comercialización en el mercado interno. Sin embargo, la diversificación de ingresos como estrategia de negocios nos protege ante cambios coyunturales y contextos inflacionarios. Sin embargo, la diversificación de ingresos como estrategia de negocios nos protege ante cambios coyunturales y contextos inflacionarios.</p>
				</div>

				<p className='mb-[44px] font-light leading-[35px]'>Puedes <span className='font-medium text-[#06D7F9]'>consultarnos</span> sobre este tema y otro relacionados por mail info@inner-team.com o por whatsapp</p>

				<p className='font-light'>Fuentes y links relacionados: <a className='underline'>https://www.afip.gob.ar/derechos-de-exportacion-de-servicios/que-es/exportacion-de-servicios.asp</a></p>

				<div className='flex justify-between mt-[120px]'>
					<Link to='/blog/details2' className='text-[#54E280] font-light'>- Entrada anterior</Link>
					<Link to='/blog/details4' className='text-[#54E280] font-light'>Entrada siguiente ></Link>
				</div>
			</div>

		</section>
	)
}