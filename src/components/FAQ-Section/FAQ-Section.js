import React from 'react';
import FAQItem from './FAQ-Item/FAQ-Item.js';

function FAQSection() {

	return(
		<section className='relative w-full h-full px-[16px] lg:px[0] bg-[#225890]'>

			<svg className='absolute w-[16vw] h-[15vw] lg:w-[125px] lg:h-[120px]' viewBox="0 0 125 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M124.793 1.14951e-05L0.117188 0L0.117178 119.357L124.793 119.357L124.793 1.14951e-05Z" fill="#225890"/>
				<path d="M51.2854 0.0705329L51.2854 97.8873L59.9946 114.521L59.9946 0.0705338L51.2854 0.0705329Z" fill="#225890"/>
				<path d="M42.5617 0.0709297L42.5617 81.2685L51.2856 97.8877L51.2857 0.0709305L42.5617 0.0709297Z" fill="white"/>
				<path d="M33.8542 0.070449L33.8542 64.6489L42.5635 81.2681L42.5635 0.0704498L33.8542 0.070449Z" fill="#225890"/>
				<path d="M25.1443 0.0704567L25.1443 48.0157L33.8535 64.6489L33.8535 0.0704575L25.1443 0.0704567Z" fill="white"/>
				<path d="M16.4211 0.0708648L16.4211 31.397L25.145 48.0161L25.145 0.0708656L16.4211 0.0708648Z" fill="#225890"/>
				<path d="M0.000127092 0.0705502L7.62256 14.5947L7.62256 0.0705509L0.000127092 0.0705502Z" fill="#225890"/>
				<path d="M7.62354 0.0703727L7.62353 14.5945L16.4209 31.3965L16.4209 0.0703735L7.62354 0.0703727Z" fill="white"/>
				<path d="M94.8474 0.0709488L94.8474 57.5771L103.571 40.9439L103.571 0.0709496L94.8474 0.0709488Z" fill="white"/>
				<path d="M112.28 0.0703785L112.28 24.3242L120.99 7.70506L120.99 0.0703793L112.28 0.0703785Z" fill="white"/>
				<path d="M120.991 0.0704023L120.991 7.70508L125 0.0704026L120.991 0.0704023Z" fill="#225890"/>
				<path d="M103.571 0.0708648L103.571 40.9438L112.28 24.3247L112.28 0.0708656L103.571 0.0708648Z" fill="#225890"/>
				<path d="M86.1394 0.0704414L86.1394 74.1958L94.8486 57.5766L94.8486 0.0704422L86.1394 0.0704414Z" fill="#225890"/>
				<path d="M68.7048 0.0710365L68.7048 107.449L77.4287 90.8155L77.4287 0.0710373L68.7048 0.0710365Z" fill="#225890"/>
				<path d="M59.9973 0.0702278L59.9973 114.52L62.5087 119.287L68.7065 107.448L68.7066 0.0702286L59.9973 0.0702278Z" fill="white"/>
				<path d="M77.428 0.0704567L77.428 90.8149L86.1372 74.1958L86.1372 0.0704575L77.428 0.0704567Z" fill="white"/>
			</svg>

			<div className='lg:px-[11vw] py-[100px]'>

				<div className='text-center mb-[7px] lg:text-left'>
					<h5 className='text-[#54E280] mb-[7px] font-semibold'>Preguntas Frecuentes</h5>
					<h3 className='text-[24px] lg:text-4xl font-semibold'>Resolvemos tus inquietudes</h3>
				</div>

				<div className='py-[70px] lg:px-[16vw]'>

					<FAQItem
						question='¿Cómo se realiza el pago?'
						answer= 'Las asesorías y los servicios mensuales se pagan por transferencia bancaria. Podes consultar si necesitas otro medio de pago.'
					/>

					<FAQItem
						question='¿Trabajan con responsables inscriptos?'
						answer= 'Sí, aunque no es una figura impositiva que recomendamos.'
					/>

					<FAQItem
						question='¿Puedo darme de alta para aprender lo que tengo que hacer y después darme 
						de baja?'
						answer= 'Si buscas capacitarte podés tomar una sesión de asesoramiento y/o contratar una serie de sesiones para lograr tu objetivo.'
					/>

					<FAQItem
						question='¿Comparten información con AFIP?'
						answer= 'No, la información que compartís con nosotros es confidencial.'
					/>

					<FAQItem
						question='¿Cuánto voy a tener que pagar de impuestos trabajando para el exterior?'
						answer= 'Depende tu actividad, tu ubicación territorial y los montos de facturación, entre otras variables que hay que analizar en tu caso en particular.'
					/>

				</div>

			</div>

		</section>
	)
}

export default FAQSection;