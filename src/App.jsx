// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import './App.css';

// const ProductCard = () => {
//   const [count, setCount] = useState(1);
//   const itemPrice = 17000;
//   const totalPrice = count * itemPrice;

//   const handleRemove = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

heading same font size color line height


p line height


container site -> max-width 1200px

spacing between sections should be same



//   return (
//     <div className="product-card">
//       <img className="sneaker" src="src/assets/image.png" alt="" />
//       <h2 className="product-name">Air Jordan 1 Retro High</h2>
//       <p className="product-price"> Total : {totalPrice}</p>
//       <div className="counter-container">
//         <button
//           onClick={() => setCount(count + 1)}
//           className="add-button"
//         >
//           Add to Cart
//         </button>
//         <span className="cart-count">{count}</span>
//         <button
//           onClick={handleRemove}
//           className="remove-button"
//         >
//           Remove from Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className="app-container">
//         <div className="products">
//           <ProductCard /><ProductCard /><ProductCard /> <ProductCard />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;