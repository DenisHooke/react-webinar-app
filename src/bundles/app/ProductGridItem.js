import React, { Component, PropTypes } from 'react';
import CartButton from './CartButton';

const productShape = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
};

class ProductGridItem extends Component {

  static propTypes = {
    product: PropTypes.shape(productShape).isRequired,
  };

  render() {
    const { product } = this.props;

    return (
      <div className="col-md-4 product-grid-item" >
        <span className="image" >
          <img src={`${product.image}/${product.id}`} className="img-thumbnail" alt={product.title} />
          <span className="title">{product.title}</span>
        </span>
        <div className="description">{product.description}</div>
        <div className="price">${product.price}</div>
        <CartButton product={product} productId={product.id} />
      </div>
    );
  }
}

export default ProductGridItem;
