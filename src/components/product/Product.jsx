import React, {useState} from "react";
import SetQtyButton from "./AdjustQtyBtn";
import ProductImage from "./ProductImage";

function Product (props) {

   function handleIsPressed () {
      props.addToCart(props.index);
   }
    return <div className="product">
    <div className="img-btn">
       <ProductImage 
        isPressed={props.isPressed}
        productName={props.productName}
        productImgDesktop={props.productImgDesktop}
        productImgMobile={props.productImgMobile}
       />
       {props.isPressed? <SetQtyButton 
        decreaseQuantity={props.decreaseQuantity}
        addToCart={props.addToCart}
        item={props.index}
       />: <button className="add-btn" onClick={handleIsPressed}><img className="cartIcon" src={`${process.env.PUBLIC_URL}/assets/images/icon-add-to-cart.svg`}/> Add to Cart</button>} 
    </div>

    <div className="product-info">
       <p className="product-category">{props.productCategory}</p>
       <p className="product-name">{props.productName}</p>
       <p className="product-price">${Math.round(props.productPrice).toFixed(2)}</p>
    </div>
    </div>
}

export default Product;