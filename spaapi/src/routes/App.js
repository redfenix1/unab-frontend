import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import ProductosCreados from '../pages/ProductosCreados';
import Navegacion from '../layouts/Navegacion';
import CrearProducto from '../pages/CrearProducto';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={ <ProductosCreados /> } />
        <Route path="/crearproducto" element={ <CrearProducto /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
