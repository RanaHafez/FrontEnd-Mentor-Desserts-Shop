import React from 'react';


function ProductImage (props) {
    return <div>
        <img className={props.isPressed? "bordered-img img-small": "img-small"} src={`${process.env.PUBLIC_URL}${props.productImgDesktop}`} alt={props.productName}/>
        <img className={props.isPressed? "bordered-img img-large": "img-large"} src={`${process.env.PUBLIC_URL}${props.productImgMobile}`} alt={props.productName}/>
    </div>;
}
export default ProductImage;