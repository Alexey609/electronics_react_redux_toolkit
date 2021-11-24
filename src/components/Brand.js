import React from 'react';
import '../css/brand.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ItemsCart } from './ItemsCart';


function Brand( ) {
    

    const items = useSelector(state => state.cart.itemsInCart); 
    const totalPrice = items.reduce((acc, good) => acc += good.price, 0);
    

    return (
        <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><Link to="/">e<span>Electronics</span></Link></h1>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <Link to="/cart">Cart - 
                       {totalPrice > 0 ?  (
                        <span className="cart-amunt"> {totalPrice}</span> 
                       ) : null} 
                        <i className="fa fa-shopping-cart"></i> 
                        {/* <span className="product-count">5</span> */}
                        <ItemsCart count={items.length} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Brand;
