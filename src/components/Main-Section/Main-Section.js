import React from 'react';
import BlogSection from '../Blog-Section/Blog-Section.js';
import FAQSection from '../FAQ-Section/FAQ-Section.js';
import TestimonialsSection from '../Testimonials-Section/Testimonials-Section.js';
import ClientsSection from '../Clients-Section/Clients-Section.js';
import ContactSection from '../Contact-Section/Contact-Section.js';
import FooterSection from '../Footer-Section/Footer-Section.js';


export default function MainSection() {
	return(
		<section>
			<FAQSection />
			<TestimonialsSection />
			<ClientsSection />
			<ContactSection />
			<FooterSection />
		</section>
	)
}