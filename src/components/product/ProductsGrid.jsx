import React from "react";
import '../../Products.css';
import data from '../../data.json';
import Product from "./Product";

function ProductsGrid (props) {
    return <div className="products-section">
       <h1>Desserts</h1>
       <div className="products-grid">
       {data.map((item, i) => {
         return <Product
            key={item.name}
            index={i}
            isPressed={props.isPressedMap[i]}
            addToCart={props.addToCart}
            decreaseQuantity={props.decreaseItemQuantity}
            productImgDesktop={item.image.desktop}
            productImgMobile={item.image.mobile}
            productName={item.name}
            productPrice={item.price}
            productCategory={item.category}
          />
       })}
       </div>
    </div>;
}


export default ProductsGrid;