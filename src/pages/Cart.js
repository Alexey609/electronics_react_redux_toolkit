import React from 'react';
import '../css/cart.css';
import { OrderItem } from '../components/OrderItem';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../components/utils';

function Cart() {
   
    const items = useSelector(state => state.cart.itemsInCart); 
   
    

    return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            <div className="single-sidebar">
                        <h2 className="sidebar-title">Search Products</h2>
                        <form action="#">
                            <input type="text" placeholder="Search products..."/>
                            <input type="submit" value="Search"/>
                        </form>
             </div>
         </div>    
     </div>         
      <div className="row">
        <div className="col-md-12">
        <div className="row">
        <div className="col-md-6">
                <div className="product-content-right">
                     <div className="woocommerce">
                        <table cellspacing="0" className="shop_table cart">
                        <thead>
                                        <tr>
                                            <th className="product-remove">&nbsp;</th>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            {/* <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th> */}
                                        </tr>
                                    </thead>

                                    <tbody>
                                      { items.map(good => <OrderItem good={good} 
                                      id={good.id}
                                      />) }
                                        <tr>
                                            <td className="actions" colspan="6">
                                                <div className="coupon">
                                                  
                                                </div>
                                               
                                            </td>
                                      </tr>  
                                     </tbody>            
                         </table>
                     </div>
                 </div> 
               </div>  
               <div className="col-md-6">
                 <div className="cart_totals ">
                                <h2>Cart Totals</h2>

                                <table cellspacing="0">
                                    <tbody>
                                        <tr className="order-total">
                                            <th>Order Total</th>
                                            <td><strong><span className="amount">
                                                { calcTotalPrice(items) }$
                                                </span></strong> </td>
                                        </tr>
                                    </tbody>
                                </table>
                 </div>
               </div>  
             </div>    
        </div>
     </div>  
</div>  
    )
}

export default Cart
