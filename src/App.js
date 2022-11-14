import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Detail } from './pages/Detail';
import { Cart } from './pages/Cart';
import { CartContext } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        < BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/category/:categoryId"} element={<Category />} />
            <Route path={"/product/:productId"} element={<Detail />} />
            <Route path={"/carrito"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;