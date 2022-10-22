import React from 'react';
import './App.scss';
import Navbar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemProduct from './components/ItemProduct'

function App() {
  return (
    <div className="App">
      <header>        
        <div>
          <Navbar titulo="Grow El Cañaveral" nav1="Iluminacion" nav2="Accesorios" nav3="Sustratos" carrito=""/>          
        </div>              
      </header>

      <main>        
        < ItemProduct/>
        <ItemListContainer />

      </main>

      <footer className='piedepagina'>
        <h3 className=''>Politica de privacidad</h3>
      </footer>
    </div>
  );
}

export default App;