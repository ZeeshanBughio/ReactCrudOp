import './App.css';
import Home from './components/pages/home';
import Props from './components/pages/props';
import State from './components/pages/state';
import NotFound from './components/pages/notfound';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import User from './components/user/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
