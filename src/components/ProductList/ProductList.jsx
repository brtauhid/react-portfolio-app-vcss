import Product from "../Product/Product";
import {products} from '../../data'
import './ProductList.css';

import React from 'react';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Tauhid.</h1>
            <p className="pl-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ut minus officiis, veniam itaque vel eos aspernatur cupiditate iure quisquam repellendus dolor quibusdam, et quis? Aspernatur vero libero consequuntur labore?
            </p>
            </div>

            <div className="pl-list">
                {products.map(item=>(
                    <Product
                        key={item.id} img={item.img} link={item.link}
                    ></Product>
                ))}
            </div>

        </div>
    );
};

export default ProductList;