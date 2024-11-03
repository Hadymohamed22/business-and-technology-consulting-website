import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/Services';
import NotFoundPage from './pages/NotFoundPage'
import ArticleDetails from './components/ArticleDetails';
import ScrollToTop from './components/ScrollToTop';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/articles/:articleId' element={<ArticleDetails />} />
            <Route path='services' element={<Services />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
