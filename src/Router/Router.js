import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import MainSection from '../components/Main-Section/Main-Section.js';
import BlogSection from '../components/Blog-Section/Blog-Section.js';
import BlogDetails1 from '../components/Blog-Section/Blog-Details/Blog-Details_1.js';
import BlogDetails2 from '../components/Blog-Section/Blog-Details/Blog-Details_2.js';
import BlogDetails3 from '../components/Blog-Section/Blog-Details/Blog-Details_3.js';
import BlogDetails4 from '../components/Blog-Section/Blog-Details/Blog-Details_4.js';
import BlogDetails5 from '../components/Blog-Section/Blog-Details/Blog-Details_5.js';


export default function Router() {
	return(
		<BrowserRouter>
        <Link to={'/home'} className='text-[#000000] mr-[100px]'>Home</Link>
        <Link to={'/blog'} className='text-[#000000]'>Blog</Link>

			<Routes>
				<Route path='/home' element={ <MainSection /> } />
				<Route path='/blog' element={ <BlogSection /> } />
				<Route path='/blog/details1' element={ <BlogDetails1 /> } />
				<Route path='/blog/details2' element={ <BlogDetails2 /> } />
				<Route path='/blog/details3' element={ <BlogDetails3 /> } />
				<Route path='/blog/details4' element={ <BlogDetails4 /> } />
				<Route path='/blog/details5' element={ <BlogDetails5 /> } />
			</Routes>
		</BrowserRouter>
	)
}