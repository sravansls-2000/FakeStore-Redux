import React from 'react';
import { useSelector } from 'react-redux';
import './Product.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.AllProducts.products);
  console.log(products);
  const renderingCard = products.map((element, index) => {
    const { id, image, title, price, rating } = element;
    return (
      <Link to={`./products/${id}`}>
        <div class="card">
          <figure>
            <img src={image} alt={title} />
          </figure>
          <section class="details">
            <div class="min-details">
              <h1>{title}</h1>
              <h1 class="price">RS.{price}</h1>
            </div>

            <div class="options">
              <div class="options-size">
                <h1>Rating</h1>
                <b>{rating.rate}</b>
              </div>

              <div class="options-colors">
                <h1>{rating.count ? 'In Stock' : 'Out Of Stock'}</h1>
                <h3>Avalable:{rating.count}</h3>
              </div>
            </div>
            {/* <a href="#" class="btn">
            add to cart
          </a> */}
          </section>
        </div>
      </Link>
    );
  });
  return <div className="allProducts">{renderingCard}</div>;
};
export default Products;
