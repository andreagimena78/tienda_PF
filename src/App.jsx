
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartProvider'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Footer } from './components/Footer/Footer'
import { MainLayout } from './layouts/MainLayout'
import { Cart } from './components/Cart/Cart'
import { AdminLayout } from './layouts/AdminLayouts'
import { Login } from './components/Login/Login'
import { RutaProtejida } from './components/RutaProtejida/RutaProtejida'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className='App'>
            
            <Routes>
              <Route element={<MainLayout/>}>
                <Route 
                path= "/" 
                element={<ItemListContainer 
                titulo={"Bienvenidos a la tienda"}
                />}
                />
                <Route 
                path='/category/:category'
                element= {<ItemListContainer titulo={"Bienvenidos"}/>}
                />
                <Route 
                path='/detail/:id' 
                element= {<ItemDetailContainer/>}
                />
                <Route 
                path='/carrito'
                element={<Cart/>}
                />
              </Route>
              <Route
              path='/admin'
              element={<AdminLayout/>}>
                <Route index element={<Login/>}/>
                <Route
                path='alta-productos'
                element={
                  <RutaProtejida>
                    <ProductFormContainer/>
                  </RutaProtejida>
                }/>

              </Route>
            </Routes>
            <Footer/>

          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App
