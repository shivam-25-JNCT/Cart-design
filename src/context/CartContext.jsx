import { prefix } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { createContext,useState } from 'react'

 export const CartContext=createContext();

export const CartProvider=({children})=>{
  const [cart, setCart] = useState([]);

   
  const addToCart=(product)=>{
      const exist = cart.find((item)=> item.id===product.id);
      if(exist){
        setCart((preCart) =>preCart.map(item=>(
           item.id===product.id ? {...item, qty : item.qty+1} : item
        )));
      }
      else {
        setCart([...cart,{...product,qty:1}])
      }
  }
//==================================
  const removeFromCart =(id)=>{
   setCart((preCart) =>preCart.filter(item=>item.id!==id))
  }
//==============================
const incrementQty=(id)=>{
setCart((preCart) =>preCart.map(item=>(
  item.id===id ? {...item, qty: item.qty+1}:item
)))
}
//==============================
const decrementQty=(id)=>{

setCart(preCart=>{
  const updateCart=preCart.map(item =>
    item.id===id ? {...item,qty:item.qty -1}  : item 
  )
  return updateCart.filter(item=>item.qty>0)
})
}
//==============================
const totalPrice =cart.reduce((total,item)=> 
 total+item.price * item.qty ,0)
//==============================
const totalItem = cart.reduce((total,item)=>
total+item.qty
,0)


//==========================

return (
    <CartContext.Provider value={{cart,addToCart ,removeFromCart,incrementQty,decrementQty,totalPrice,totalItem}}>

        {children}
    </CartContext.Provider>
)
}