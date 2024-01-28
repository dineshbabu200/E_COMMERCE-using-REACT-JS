import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Contact from './Components/Contacts'
import About from './Components/About'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/products' Component={Products} />
        <Route exact path='/products/:id' Component={Product} />
        {/* <Route exact path='/cart' Component={Cart} /> */}
        <Route exact path='/cart' Component={Cart} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contact' Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
