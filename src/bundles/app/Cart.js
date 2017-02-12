import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Cart extends Component {

  static propTypes = {
    cart: PropTypes.object.isRequired,
  };

  renderProduct(products, key) {
    const quantity = products.length;
    const product = products[0];

    return (
      <tr key={key}>
        <td className="image">
          <img src={`${product.image}/${product.id}`} alt={product.title} />
        </td>
        <td>
          <div className="title">{product.title}</div>
          <div className="price">
            <span className="quantity">{quantity}</span>
            x ${product.price}
          </div>
        </td>
        <td className="total">
          ${quantity * product.price}
        </td>
      </tr>
    );
  }

  renderProducts(products) {
    return _.map(products, this.renderProduct);
  }

  render() {
    const { cart } = this.props;

    return (
      <table className="cart">
        <tbody>
        {(_.size(cart) === 0)
            ? <p className="no-items">No products in cart</p>
            : this.renderProducts(cart)
        }
        </tbody>
      </table>
    );
  }
}

export default Cart;
