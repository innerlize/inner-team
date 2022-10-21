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

						<h3 className='text-[40px] font-semibold'>Blog</h3>
					</div>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[32px] font-semibold mb-[44px]'>Inicio de Actividades</h5>
					<h6 className='text-[#06D7F9] font-medium'>Lo que tenés que saber</h6>
				</div>

				<div>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Cuándo declarar el inicio de una actividad económica?</h5>
					<p className='font-light leading-[35px]'>El momento en que necesitas emitir tu primera factura, es cuando estás listo para formalizar tu situación ante los organismos de control y es el momento de contratar un contador para liquidar impuestos. Antes de iniciar los trámites para facturar tenés que tomar algunas decisiones en función de tu actividad:</p>
					<p className='font-light my-[44px] leading-[35px]'>Determinar que tipo de contribuyente te conviene constituir, monotributo o sociedad, en función de tu actividad y tus clientes te conviene uno u otro.</p>
					<p className='font-light leading-[35px]'>Analizar las jurisdicciones en las que vas a operar y la legislación vigente en cada lugar.</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>¿Qué necesitás?</h5>
					<p className=' font-light leading-[35px]'>De acuerdo a las decisiones que tomes sobre tu negocio, te corresponde inscribirte en los organismos de control:</p>
					<p className=' font-light leading-[35px] mt-[44px]'>CUIT ante afip</p>
					<p className=' font-light leading-[35px]'>
						Ingresos Brutos, local o convenio multilateral <br />
						Autónomo, Monotributo <br />
						Tasas por constitución de sociedades <br />
						Tasas Municipales <br />
						Alta de empleados si corresponde <br />
					</p>
				</div>

				<div className='my-[44px]'>
					<h5 className='text-[24px] font-medium mb-[5px]'>Una vez que te inscribís…</h5>
					<p className='font-light leading-[35px] mb-[44px]'>Una vez que te inscribís, tenés que cumplir con obligaciones periódicas de presentación y declaración de tus operaciones. Por eso es importante, que te des de alta, es decir que formalices tu actividad económica, una vez que ya tenés cierta habitualidad, de manera que puedas sostener los costos administrativos que genera.</p>
					<p className='font-light leading-[35px]'>El no cumplimiento de las obligaciones de presentación genera #multas, en caso de que no continues desarrollando la actividad por la que te inscribiste es importante que te des de baja, para evitar multas e intereses que pueden afectar otros ingresos a traves, por ejemplo, de #retenciones bancarias.</p>
				</div>

				<p className='mb-[44px] font-light leading-[35px]'>Puedes <span className='font-medium text-[#06D7F9]'>consultarnos</span> sobre este tema y otro relacionados por mail info@inner-team.com o por whatsapp</p>

				<Link to='/blog/details3' className='text-[#54E280] font-light'>- Entrada anterior</Link> <Link to='/blog/details5' className='text-[#54E280] font-light'>Entrada siguiente ></Link>
			</div>

		</section>
	)
}