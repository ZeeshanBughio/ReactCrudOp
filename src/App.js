import './App.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import NotFound from './components/pages/notfound';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/user/AddUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
