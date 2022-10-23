
import './App.css';
import {Route, Routes , BrowserRouter} from 'react-router-dom';
import  Landing from './components/pages/Landing';
import BlogSection from './components/Blog-Section/Blog-Section';
import BlogDetails1 from './components/Blog-Section/Blog-Details/Blog-Details_1';
import BlogDetails2 from './components/Blog-Section/Blog-Details/Blog-Details_2';
import BlogDetails3 from './components/Blog-Section/Blog-Details/Blog-Details_3';
import BlogDetails4 from './components/Blog-Section/Blog-Details/Blog-Details_4';
import BlogDetails5 from './components/Blog-Section/Blog-Details/Blog-Details_5';
import NavigationDefault from './components/Nav/NavigationDefault';
import FooterSection from './components/Footer-Section/Footer-Section';

function App() {
  return (
    <BrowserRouter>
      <NavigationDefault />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/blog' element={ <BlogSection /> } />
				<Route path='/blog/details1' element={ <BlogDetails1 /> } />
				<Route path='/blog/details2' element={ <BlogDetails2 /> } />
				<Route path='/blog/details3' element={ <BlogDetails3 /> } />
				<Route path='/blog/details4' element={ <BlogDetails4 /> } />
				<Route path='/blog/details5' element={ <BlogDetails5 /> } />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;

