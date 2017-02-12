import React, { Component, PropTypes } from 'react';
import ProductGridItem from './ProductGridItem';

class ProductGrid extends Component {

  static propTypes = {
    products: PropTypes.array,
  };

  static defaultProps = {
   products: [],
  }

  render() {
    const { products } = this.props;

    return (
      <div className="row">
        {products.map((product, key) => (
          <ProductGridItem
            key={key}
            product={product}
            addToCart={() => {}}
          />
        ))}
      </div>
    );
  }
}

export default ProductGrid;
