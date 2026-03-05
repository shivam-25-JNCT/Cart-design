
import { useCartContext } from "../context/CartContext";
function ProductList() {

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://tse2.mm.bing.net/th/id/OIP.Icxy0CXMf8q-atjlr5p4VgHaFj?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    image: "https://tse2.mm.bing.net/th/id/OIP.KVobOFX_w0eaR19UOAogkAHaFb?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    image: "https://tse3.mm.bing.net/th/id/OIP.jGPnOsAVGk4ug6fQ9vLqhwHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1500,
    image: "https://purepng.com/public/uploads/large/purepng.com-keyboardelectronicskeyboard-941524672523cwpt1.png"
  }
];

const {addToCart} =useCartContext();
  return (
    <div  >
        <main className='shadow-xl min-w-full min-h-92 p-2   rounded-lg  divide-y  divide-gray-400 ml-5 bg-white  mt-4 shadow-2xl ' >
            <h2 className='text-2xl'>Products</h2>
           
            
              {products.map((prod)=>(
                <div key={prod.id} className=' flex items-center border border-gray-300 rounded-lg bg-white gap-10 mt-3 shadow-2xl'>
                    <div className='w-32 h-24'> <img src={prod.image} alt="" /></div>
                    
                    <div className=' font-semibold flex  flex-col '>
                           <h3>{prod.name} </h3>
                           <h4>₹{prod.price}</h4>
                           <button 
                           onClick={()=>addToCart(prod)}
                           className='bg-blue-900 text-white px-4 py-0.5 rounded active:scale-90'
                           >Add to Cart</button>
                    </div>
                   
                </div>
               
                
               ))}
            
        </main>
    </div>
  )
}

export default ProductList