import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";


const App =()=>{
  //Defining States
  const[cart,setCard] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ])
  const[itemCount,setItemCount] = useState(0)

  //Functions
  const getItemCount = (cartx) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCountx = cartx.reduce((total, product) => total + product.value, 0);

    return itemCountx;
  };
  const handleDecrement = (product) => {
    const cartf = [...cart];
    const index = cartf.indexOf(product);
    cartf[index] = { ...cartf[index] };
    cartf[index].value--;
    const itemCountf = getItemCount(cartf);
    setCard(cartf)
    setItemCount(itemCountf)
  };
  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cartc = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cartc.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cartc[index] = { ...cartc[index] };
    cartc[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCountc = getItemCount(cartc);
    // state'i güncelle
    setCard(cartc)
    setItemCount(itemCountc)
  };

  //Returning HTML
  return (
    <div className="App">
      <Navbar totalItems={itemCount} />
      <ProductsGrid
        products={products}
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement
        }
      />
    </div>
  );
}
export default App;
