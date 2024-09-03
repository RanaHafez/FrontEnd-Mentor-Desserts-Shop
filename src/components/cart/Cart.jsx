
import React, {useState} from "react";
import '../../Cart.css';
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import carbon from '../../icons/icon-carbon-neutral.svg';
import confirmOrder from '../../icons/icon-order-confirmed.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Cart (props) {
    const [showPopUp, setShowPopup] = useState({display: "none"});
    
    function handlePopUp() {
        setShowPopup({display: "block"});
    }
    return <div className="cart-div">
    <h3 className="item-qty">Your Cart ({props.cartCount})</h3>
    {props.cartCount === 0? <EmptyCart/>: <div className="column-items">
       {props.cartItems.map((item,i) => {
        return <div>
        <CartItem 
            key={item.name}
            itemID={item.id}
            itemName={item.name}
            itemPrice={item.price}
            itemQty={item.quantity}
            deleteFromCart={props.deleteFromCart}
        />
        <hr/>
        </div>
       })}
       <div className="row-items">
           <p className="dark-text">Order Total</p>
           <h2 className="total-price">${Math.round(props.totalPrice).toFixed(2)}</h2>
       </div>

       <div className="carbon-div">
         <img src={carbon} />
         <p className="dark-text">This is a <span className="bold-str">carbon-neutral</span> delivery</p>
      </div>

      
      <Popup className="rounded" trigger={<button className="long-btn">Confirm Order</button>} modal nested contentStyle={{
          borderRadius: '10px', // Applying border-radius directly
          padding: '20px',
          maxWidth: '500px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        }}>
        {
            close => (
                <div className="modal">
                   <div className="content">
                        <img src={confirmOrder} alt='confirmOrder'/>
                        <h1 className="dark-text">Order Confirmed</h1>
                        <p className="item-price">We hope you enjoy your food!</p>
                        <div className="order-list">
                {props.cartItems.map((cartItem, i) => {
                 return <div>
                 <div className="order">
                     <div className="order-price-info">
                        <img alt={cartItem.name} src={`${process.env.PUBLIC_URL}${cartItem.image.thumbnail}`} className="thumbnail-img"/>
                        <div className="more-info">
                           <h4 className="name">{cartItem.name}</h4>
                           <div className="row-items-left">
                           <p className="item-qty">{cartItem.quantity}x</p>
                           <p className="item-price">@${Math.round(cartItem.price).toFixed(2)}</p>
                           </div>
                           
                        </div>
                     </div>


                     <p className="name">${Math.round(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                 </div>
                 <hr />
                 </div>
                })}
         
                <div className="row-items">
                 <p className="dark-text">Order Total</p>
                 <h2 className="total-price">$46.50</h2>
                </div>
                        </div>
                   </div>
                   <button className="long-btn" onClick={props.resetState}>Start New Order</button>
                </div>
            )
        }
                
       </Popup>
    </div>}
    </div>
}
export default Cart;