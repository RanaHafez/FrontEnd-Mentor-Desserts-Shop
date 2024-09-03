import Cart from "./components/cart/Cart";
import './App.css';
import ProductsGrid from "./components/product/ProductsGrid";
import React, {useState} from "react";
import data from './data.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isPressedMap, setIsPressedMap] = useState({});
  const [cartLength, setCartLength] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  function resetState () {
    setCartItems([]);
    setIsPressedMap({});
    setCartLength(0);
    setTotalPrice(0);
  }   
  function addItemToCart(item) { 
    // Logic to add an item to the cart
    console.log(item);
    setCartItems((prev) => {
      const itemExits = prev.find((cartItem) => cartItem.id === item);
      console.log(item);
      if (itemExits) {
        return prev.map(cartItem =>
          cartItem.id === itemExits.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const newItem = {...data[item],id: item, quantity: 1};
        
        return [...prev, newItem];
      }
      
    });

    setIsPressedMap((prev) => ({
      ...prev,
      [item]: true,
    }));

    setCartLength(cartLength + 1);
    setTotalPrice((prev) => {
      const itemAdded = cartItems.find((cartItems) => cartItems.id === item);
      if (itemAdded) {
        return prev + itemAdded.price;
      } 
      return prev + data[item].price;
    });
  }
  
  function decreaseItemQuantity (itemId) {
    setCartItems((prevCart) => {
      const item = prevCart.find((cartItem) => cartItem.id === itemId);
      if (item) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart;
    });

    setTotalPrice((prev) => {
      const itemAdded = cartItems.find((cartItems) => cartItems.id === itemId);
      if (itemAdded) {
        return prev - itemAdded.price;
      } 
      return prev - data[itemId].price;
    });
    setCartLength(cartLength - 1);
  }
  function removeItemFromCart(itemId) { 
    // Logic to remove an item based on its ID
    const quantity = cartItems.find((cartItem) => cartItem.id === itemId).quantity;
    setCartItems(prevItem => prevItem.filter((cartItem) => cartItem.id !== itemId));
    setIsPressedMap((prev) => ({
      ...prev,
      [itemId]: false,
    }));

    setCartLength(cartLength - quantity);
    setTotalPrice((prev) => {
      const itemAdded = cartItems.find((cartItems) => cartItems.id === itemId);
      if (itemAdded) {
        return prev - (itemAdded.price * quantity );
      } 
      return prev - (data[itemId].price * quantity );
    });
  }


  return (
    <div className="App">

       <ProductsGrid 
        addToCart={addItemToCart}
        decreaseItemQuantity={decreaseItemQuantity}
        isPressedMap={isPressedMap}
       />
       <Cart 
        cartItems={cartItems}
        deleteFromCart={removeItemFromCart}
        cartCount={cartLength}
        totalPrice={totalPrice}
        resetState={resetState}
       />
    </div>
  );
}

export default App;
