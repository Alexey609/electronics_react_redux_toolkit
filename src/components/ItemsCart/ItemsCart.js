import React from 'react';

export const ItemsCart = ({ count = 0 }) => {
    return count > 0 ? (
        <span className="product-count">
            { count }
        </span>
    ) : null
}