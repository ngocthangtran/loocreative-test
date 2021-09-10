import React from 'react';
import './productitem.css'

function ProductItem(props) {
    const { image } = props;
    return (
        <div className='product__item'>
            <img src={image} alt="" />
            <div className="conten">
                <div className="product__name">
                    [what happen] How to create
                </div>
                <div className="product__price">
                    <div className="price">
                        2,500 won
                    </div>
                    <div className="like">
                        <i class='bx bxs-heart'></i>
                        236
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;