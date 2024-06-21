import React from 'react';

function ShopTit({catName}) {
    console.log(catName);
    return (
        <div className='shop-tit-box'>
            <h1>
                {catName == "SHOP" ? "Shop All Products" : "Shop " + catName}
            </h1>
        </div>
    );
}

export default ShopTit;