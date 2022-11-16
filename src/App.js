import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';
import { Cart } from './pages/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider value={[]}>
        < BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/category/:categoryId"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
            <Route path={"/carrito"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;