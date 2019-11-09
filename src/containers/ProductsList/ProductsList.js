import React from 'react';

import classes from './ProductsList.module.css';
import Products from '../../components/Products/Products';
import ProductsDescription from '../../components/Products/ProductsDescription/ProductsDescription';

const importAllImages = req => {
    let images = {};
    req.keys().map(item => {
        return images[item.replace('./', '')] = req(item);
    });
    return images;
};
const images = importAllImages(require.context('../../assets/images/productImages/sneakers', false, /\.(png|jpe?g|svg)$/));

const ProductsList = () => {



    return (
        <div className={classes.ProductsList}>

            <ProductsDescription productsTitle='SNEAKERS' shortDescription='Shoes primarily designed for sports or other forms of physical exercise, but which are now also widely used for everyday wear.' />
            <Products productsData={[{imageSource: images['sneakers-black.jpg'], imageAlt: 'sneakers Black', title: '1', price: 1},
        {imageSource: images['sneakers-white.jpg'], imageAlt: 'sneakers White', title: '2', price: 2}]}/>
            <ProductsDescription productsTitle='HIKING BOOTS' shortDescription='Footwear specifically designed for protecting the feet and ankles during outdoor walking activities such as hiking.' />
            <ProductsDescription productsTitle='RUNNING SHOE' shortDescription='Made for running over long distances.' />
            <ProductsDescription productsTitle='SLIP-ON SHOE' shortDescription='Low, lace-less shoes. The style which is commonly seen, known as a loafer or slippers in American culture. Has a moccasin construction.' />
        </div>
    );
};

export default ProductsList;