import React from "react";
import emptyCart from '../../icons/illustration-empty-cart.svg';

function EmptyCart () {
    return <div>
    <div className="centered-content">
       <img src={emptyCart} />
       <h5>Your added items will apear here</h5>
    </div>
    </div>;
}

export default EmptyCart;