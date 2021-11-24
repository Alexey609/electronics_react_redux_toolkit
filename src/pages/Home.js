import React from 'react';
import { Product } from '../components';
import GOODS from '../db'
import '../css/home.css';

function Home() {
    
    return (
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
            <div className="container">
            <div className="row">
                   {GOODS.map((good => 
                        <div className="col-md-3 col-sm-6">
                      <Product key={good.id} good={good} />
                        </div>
                      ))}
             </div>   
          </div>
       </div>
    )
}

export default Home;
