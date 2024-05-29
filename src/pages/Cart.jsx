import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <div className='flex flex-col'>
      Pagina de CARRITO

      <Link to="/cart/payment" className=' mt-60'>PAGINA DE PAYMENT</Link>
    </div>
  )
}

export default Cart
