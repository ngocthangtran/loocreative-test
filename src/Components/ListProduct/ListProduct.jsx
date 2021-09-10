import React, { useEffect, useState } from 'react';
import ProductItem from './Component/ProductItem';
import './listproduct.css'

function ListProduct(props) {
    const [images, setImages] = useState([])
    useEffect(() => {
        const img = []
        for (var i = 1; i <= 25; i++) {
            if (i < 10) {
                img.push(`Asset/Image/img-0${i}.png`)
            } else {
                img.push(`Asset/Image/img-${i}.png`)
            }
        }
        setImages(img)
    }, [])

    return (
        <div className="shop">
            <div className="list__product">
                {
                    images &&
                    images.map((item, index) => <ProductItem image={item} key={index} />)
                }
            </div>
        </div>
    );
}

export default ListProduct;