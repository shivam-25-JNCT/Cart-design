import React, { useCallback, useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../context/CartContext';


function NaveBar() {
  const {totalItem}=useContext(CartContext);
  return (
    <div>
        <main className='w-[100%] h-18 bg-gray-800 mt-7 flex
      justify-between text-white items-center px-5  '>
            <div>
                <h2 className='font-semibold text-2xl '>MyStore</h2>
            </div>
            <div className='flex items-center gap-10 underline mr-10'>
                <h4 className='active:scale-95 cursor-pointer text-xl'>Home</h4>
                <h4 className='active:scale-95 cursor-pointer text-xl'>Shop</h4>
                  <div className='relative'>
                     <FontAwesomeIcon icon={faCartShopping} className='active:scale-95 cursor-pointer text-xl'/>
                     <div>
                      <p className='absolute bg-red-600 rounded-full px-1.5 bottom-3 left-4'>{totalItem}</p>
                     </div>
                  </div>
                 
            </div>
        </main>
    </div>
  )
}

export default NaveBar;