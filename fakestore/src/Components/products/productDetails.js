import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { selectedProduct } from '../../Redux/Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductDetails = () => {
  const { productID } = useParams();
  const product = useSelector((state) => state.singleProducts);

  const dipatch = useDispatch();
  const fetchSingleProducts = async (id) => {
    const responce = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        throw new Error('not getting the data go and check ', err);
      });
    dipatch(selectedProduct(responce.data));
  };

  useEffect(() => {
    if (productID && productID !== '') fetchSingleProducts(productID);
  }, [productID]);
  return (
    <div className="productDetails">
      {Object.keys(product).length === 0 ? (
        'notOk'
      ) : (
        <section className="product">
          {/* <div className="product__photo">
            <div className="photo-container">
              <img src={image} className="photo-main" alt={title} />
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <h1>{title}</h1>
         
            </div>
            <div className="price">
              Rs <span>{price}</span>
            </div>

            <div className="description">
              <h3>description</h3>
              <ul>{description}</ul>
            </div>
            <button className="buy--btn">ADD TO CART</button>
          </div> */}
        </section>
      )}

      <footer>FakeStore</footer>
    </div>
  );
};

export default ProductDetails;
