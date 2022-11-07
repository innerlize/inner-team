import React, { useState } from 'react';
import './FAQ-Item.css';

function FAQItem({ question, answer }) {

	const [status, setStatus] = useState(false);

	return(

		<div
			className={"card select-none cursor-pointer mb-[32px] border-solid border-b-[1px] border-[#F2F2F2] " + (status ? 'actived' : null)}
			onClick={() => setStatus(!status)}
		>

			<div className='title flex justify-between items-center'>

				<h6 className='text-[16px] lg:text-[20px] font-medium'> { question } </h6>

				{
					!status ?

						<svg className='max-w-[16px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 1V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

						:

						<svg className='max-w-[16px]' viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1H15" stroke="#54E280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
				}

			</div>

			<p className='text-[12px] lg:text-[18px] text-[#225890] py-[12px] mt-[5px] overflow-hidden font-normal'>
				{ answer }
			</p>

		</div>

	)
}


export default FAQItem;