import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="page-title">Featured Products</h1>
            <ProductList />
        </div>
    );
};
export default HomePage;