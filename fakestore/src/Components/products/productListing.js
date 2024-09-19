import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './products';
import './Product.css';
import axios from 'axios';
import { setProduct } from '../../Redux/Actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state.AllProducts);
  const dipatch = useDispatch();
  const fetchProducts = async () => {
    const responce = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        throw new Error('not getting the data go and check ', err);
      });
    dipatch(setProduct(responce.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Products />
    </div>
  );
};

export default ProductListing;
