import React, { Component, PropTypes } from 'react';

class CartButton extends Component {

  static contextTypes = {
    addToCart: PropTypes.func,
  };

  static propTypes = {
    product: PropTypes.object,
    productId: PropTypes.number,
  };

  addToCart = () => {
    const { product, productId } = this.props;
    this.context.addToCart(productId, product);
  }

  render() {

    return (
      <button className="btn btn-secondary" onClick={this.addToCart}>Add to Cart</button>
    );
  }
}

export default CartButton;
