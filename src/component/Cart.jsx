
import { useCartContext } from '../context/CartContext';
function Cart() {

    const {cart ,removeFromCart,incrementQty,decrementQty,totalPrice} = useCartContext();
    
    

  return (
    <div>
        
        <main className='min-w-full  p-2   rounded-lg  divide-y  divide-gray-400 mr-5  mb-5 mt-4 bg-white shadow-2xl'>
            <h2>Shooping Cart</h2>
           {cart.map((product)=>(
           <div key={product.id} className='flex justify-between items-center  border border-gray-300 rounded-lg mt-4 p-4 shadow-2xl'>
        
            
            <div className='w-32 h-24'> <img src={product.image} alt="" /></div>

            <div className='font-semibold'>
                <h3>{product.name}</h3>
                <h4 className='mt-2'>Qty: {product.qty}</h4>
                  
            </div>

            <div className='font-semibold'>
                <h3 className='mb-2'>₹{product.price}</h3>
                <div className='flex border border-gray-500  items-center  rounded-md  items-center divide-x divide-gray-300 w-36 text-center'>
                     <button 
                     onClick={()=>{decrementQty(product.id)}}
                     className="flex-1 py-1 bg-gray-200 rounded-l-md">-</button>
    
                      <p className="flex-1 py-1">{product.qty}</p>
    
                       <button 
                       onClick={()=>{incrementQty(product.id)}}
                       className="flex-1 py-1 bg-gray-200 rounded-r-md ">+</button>

                </div>
            </div>
           
<button 
onClick={()=>{removeFromCart(product.id)}}
className="bg-red-500 rounded-lg px-4 py-2 text-white self-end active:scale-90">
  Remove
</button>

            </div>
           ))}
           <h2 className='flex justify-end  w-full px-5 font-semibold text-lg'>Total Price : {totalPrice}</h2>
        </main>
    </div>
  )
}

export default Cart