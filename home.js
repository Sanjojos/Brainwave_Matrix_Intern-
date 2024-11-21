import React from "react";
import "./home.css";
import { useCart } from "./contexts/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const hotclassics = [
    {
      id: 1,
      name: "New Balance 9060",
      size: "7",
      price: 150,
      image: "https://images.footlocker.com/is/image/EBFL2/U9060ECU?wid=250&hei=250",
    },
    {
      id: 2,
      name: "Nike Dunk Low Retro",
      size: "10",
      price: 115,
      image: "https://images.footlocker.com/is/image/EBFL2/D1391100?wid=250&hei=250",
    },
    {
      id: 3,
      name: "Adidas originals samba",
      size: "10",
      price: 100,
      image: "https://images.footlocker.com/is/image/EBFL2/IE6524?wid=250&hei=250",
    },
    {
      id: 4,
      name: "Nike Air Max 90",
      size: "11",
      price: 69.99,
      image: "https://images.footlocker.com/is/image/EBFL2/D6864100?wid=250&hei=250",
    },
    {
      id: 5,
      name: "adidas Originals Gazelle Bold",
      size: "10",
      price: 125,
      image: "https://images.footlocker.com/is/image/EBFL2/IG4390?wid=250&hei=250",
    },
    {
      id: 6,
      name: "Nike Air Max PLus",
      size: "11",
      price: 195,
      image: "https://images.footlocker.com/is/image/EBFL2/M0352100?wid=250&hei=250",
    },
    {
      id: 7,
      name: "Vans Knu Skool",
      size: "11",
      price: 75,
      image: "https://images.footlocker.com/is/image/EBFL2/N09QC6BT?wid=250&hei=250",
    },
    {
      id: 8,
      name: "Jordan AJ 1 Mid SE Poolside",
      size: "10",
      price: 99,
      image: "https://images.footlocker.com/is/image/EBFL2/F4830203?wid=250&hei=250",
    },
  ];
  const bestsellers=[  {
    id: 9,
    name: "Converse All Star HI",
    size: "10",
    price: 50,
    image: "https://images.footlocker.com/is/image/EBFL2/A00792F?wid=250&hei=250",
  },
  {
    id: 10,
    name: "New Balance 550",
    size: "10",
    price: 49,
    image: "https://images.footlocker.com/is/image/EBFL2/550CA100?wid=250&hei=250",
  },
  {
    id: 11,
    name: "Jordan AJ 1 Mid",
    size: "11",
    price: 45,
    image: "https://images.footlocker.com/is/image/EBFL2/Q8425006?wid=250&hei=250",
  },
  {
    id: 12,
    name: "Vans Knu Skool",
    size: "10",
    price: 40,
    image: "https://images.footlocker.com/is/image/EBFL2/N0D2TYS8?wid=250&hei=250",
  },
  {
    id: 13,
    name: "Nike Court Borough Mid 2",
    size: "10",
    price: 50,
    image: "https://images.footlocker.com/is/image/EBFL2/D7783113?wid=250&hei=250",
  },
  {
    id: 14,
    name: "Puma Suede Classic",
    size: "11",
    price: 40,
    image: "https://images.footlocker.com/is/image/EBFL2/38082502?wid=250&hei=250",
  },
  {
    id: 15,
    name: "Converse Chuck Taylor",
    size: "12",
    price: 50,
    image: "https://images.footlocker.com/is/image/EBFL2/A09127C?wid=250&hei=250",
  },
  {
    id: 16,
    name: "Jordan AJ Mid 2",
    size: "10",
    price: 50,
    image: "https://images.footlocker.com/is/image/EBFL2/FU7717?wid=250&hei=250",
  },
  ]
  
  
 

  return (
    <div style={{paddingBottom:"150px"}}>
     <section className='main'>
        <video muted autoPlay loop>
            <source src="/intro.mp4" type="video/mp4"/>
            
        </video>
        
        <div className='container'>
          <div className='row'>
           
            
          </div>
        </div>
      </section>
      <section id='shoe_img'>
      <div className='content' >
      <a href="#!" className="newarr_link"  style={{}}><h1 className="newarr" >New Arrivals 2024</h1></a> 
      </div>
    </section> <br/><br/>
    <section className="offer">
    <h1>JOIN SOLEVERSE AND GET 15% OFF</h1>
    <button  type="submit" className="btn btn-dark btn-md btn-block waves-effect" value="Submit">
      Signup Now
     </button>
     </section><br/><br/><br/><br/>
     <section className='everyday'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>
              <h1 style={{backgroundColor:"black",color:"white",width:"350px",fontFamily:"'Courier New', Courier, monospace"}}>HOT CLASSICS </h1>
              
              </div>
            </div>
          </div>
        </div>
      </section><br/>
      <section>
      <div className="row">
        {hotclassics.map((product) => (
          <div className="product" key={product.id}>
            <div className="product_inner">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>Size: {product.size}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
               <button >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
</section><br/>
<section className='everyday'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-content'>
              <h1 style={{backgroundColor:"black",color:"white",width:"350px",fontFamily:"'Courier New', Courier, monospace"}}>Best SELLERS </h1>
              
              </div>
            </div>
          </div>
        </div>
      </section><br/>
  <section>
  <div className="row">
        {bestsellers.map((product) => (
          <div className="product" key={product.id}>
            <div className="product_inner">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>Size: {product.size}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
               <button >Buy Now</button>
            </div>
          </div>
        ))}
      </div>
</section> <br/><br/>
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

export default Home;
