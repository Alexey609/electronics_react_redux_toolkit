import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/cart/reducer';


 export const OrderItem = ({ good, id }) => { 

    const dispatch =  useDispatch();

    const handleDelete = () => {
        dispatch( deleteItem(id));
    }

    // const added = Object.keys(good).map((key) => {
    //     return good[key];
    //   }); 

    //   console.log(added);


    return (
    <tr className="cart_item">
        <td className="product-remove">
             <Link to="" title="Remove this item" className="remove" onClick={handleDelete} >×</Link> 
         </td>

         <td className="product-thumbnail">
             <Link to=""></Link>
         </td>

         <td className="product-name">
             <a href="single-product.html">
                 { good.name }
                 </a> 
         </td>

         <td className="product-price">
             <span className="amount">{ good.price }$</span> 
         </td>

         <td className="product-quantity">
             <div className="quantity buttons_added">
                 <input type="button" className="minus" value="-"/>
                 <input type="number" size="4" className="input-text qty text" title="Qty" value="1" min="0" step="1"/>
                 <input type="button" className="plus" value="+"/>
             </div>
         </td>

         <td className="product-subtotal">
             <span className="amount">£15.00</span> 
         </td>
     </tr>
    )
}


