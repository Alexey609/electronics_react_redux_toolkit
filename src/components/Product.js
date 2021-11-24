import React from 'react';
import '../css/product.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../redux/cart/reducer';

function Product( { good } ) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
      e.stopPropagation();
      dispatch(setItemInCart( good ));
    }
    
    return (
   
         <div className="single-shop-product">
             <div className="product-upper">
                  <img src={good.image} alt=""/>
             </div>
             <h2><Link to="">{good.name}</Link></h2>
                 <div className="product-carousel-price">
                    <ins>${good.price}</ins> 
                 </div>  
                       
                 <div className="product-option-shop">
               <button className="add_to_cart_button" 
               onClick={handleClick}
               data-quantity="1" data-product_sku="" 
               data-product_id="70"
               >Add to cart</button>
             </div>                   
         </div>   
           
    )
}

export default Product;
