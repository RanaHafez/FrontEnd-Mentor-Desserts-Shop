import React from 'react';
import cancelBtn from '../../icons/icon-remove-item.svg';

function CartItem (props) {
    return <div className='cart-item'>
        <div>
            <p className='item-name'>{props.itemName}</p>
            <div className='row-items'>
               <p className='item-qty'>{props.itemQty}x</p>
               <p className='item-price'>@${Math.round(props.itemPrice).toFixed(2)}</p>
               <p className='item-total-price'>${Math.round(props.itemQty * props.itemPrice).toFixed(2)}</p>
            </div>
        </div>

        <img className='circle-icon' src={cancelBtn} onClick={() => props.deleteFromCart(props.itemID)}/>
    </div>
}
export default CartItem;