import React from "react";
import { useCart } from "./contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const { cart, removeFromCart } = useCart(); 

  return (
    <div className="cart" >
        <section className='crt'>
        <img src="/carrt.png" alt="cart"></img>
        <div className='container'>
          <div className='row'>
           
            
          </div>
        </div>
      </section>
       <section className='mycart' >
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>
              <h1 style={{backgroundColor:"black",color:"white",width:"350px",fontFamily:"'Courier New', Courier, monospace"}}>Your Cart <i class="fa fa-shopping-cart"/></h1>
              
              </div>
            </div>
          </div>
        </div>
      </section><br/>
      {cart.length === 0 ? (
        <p style={{color:"black",fontSize:"40px"}}>THERE ARE NO ITEMS IN YOUR CART...<i class="fa fa-shopping-cart"/></p>
      ) : (
        <div>
         {cart.map((item) => (
  <div className="cart-item" key={item.id}>
    <img src={item.image} alt={item.name} />
    <div>
      <p><strong>{item.name}</strong></p>
      <p>Price: ${item.price}</p>
      <p>Size: {item.size}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
  </div>
))}

        </div>
      )}
      <section className="banner">
        <div className="banner-content">
          <h2>Step Into Style with Soleverse!</h2>
          <p>
            Explore our exclusive collection of sneakers for every occasion. Your
            perfect pair awaits.
          </p>
          <button className="banner-button">Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
