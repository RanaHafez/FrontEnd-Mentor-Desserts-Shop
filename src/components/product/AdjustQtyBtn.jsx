import React, {useState} from "react";
import increment from '../../icons/icon-increment-quantity.svg';
import decrement from '../../icons/icon-decrement-quantity.svg';

function SetQtyButton (props) {

    const [qty, setQty] = useState(1);

    function handleincrease() {
        props.addToCart(props.item);
        setQty((prev) => prev + 1); // Update the quantity first
        
    }

    function handleDecrease() {

        if (qty - 1 !== 0) {
            setQty(prev => prev - 1);
            props.decreaseQuantity(props.item);
        } 
    }
    return <button className="add-btn more-btn">
        <img onClick={handleDecrease} className="icon" src={decrement} />
        {qty}
        <img onClick={handleincrease} className="icon" src={increment} />
    </button>
}

export default SetQtyButton;