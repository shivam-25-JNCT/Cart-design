import React from 'react'
import { CartProvider } from './context/CartContext'
import NaveBar from './component/NaveBar'
import ProductList from './component/ProductList'
import Cart from './component/Cart'
function App() {
  return (
 <CartProvider>
    <div className='  w-[90%] mx-auto min-h-[90vh] mt-5  border border-gray-900 rounded-xl shadow-2xl bg-gray-200'>
      <NaveBar/>
      <div className='flex w-full justify-around'>
        <div className='w-[45%]'>
              <ProductList/>
        </div>
        <div className='w-[45%]'>
  <Cart/>
        </div>
      </div>
   
    </div>
    </CartProvider>
  )
}

export default App