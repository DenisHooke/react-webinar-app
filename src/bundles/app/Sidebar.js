import React, { Component } from 'react';
import Cart from './Cart';

class Sidebar extends Component {

  render() {
    const { cart } = this.props;

    return (
      <div className="block">
        <div className="block-header block-title">Cart</div>
        <div className="block-content">
          <Cart cart={cart} />
        </div>
      </div>
    );
  }
}

export default Sidebar;
