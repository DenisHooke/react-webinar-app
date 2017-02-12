import React, { Component, PropTypes } from 'react';

import './styles';
import ProductGrid from './ProductGrid';
import Sidebar from './Sidebar';
import { getData } from './lib/api';

class Root extends Component {
  state = {
    cart: {},
    data: [],
  }

  static childContextTypes = {
    addToCart: PropTypes.func,
  }

  getChildContext() {
    return { addToCart: this.addToCart };
  }

  addToCart = (key, product) => {
    const { cart } = this.state;

    (cart[key] === undefined)
      ? cart[key] = [product]
      : cart[key].push(product);

    this.setState({ cart });
  }


  componentDidMount() {
    getData(1).then(data => {
      this.setState({data});
    });
  }

  render() {
    const { data, cart } = this.state;

    return (
      <div className="root">
        <div className="root__navbar">
          navbar
        </div>
        <div className="root__content">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ProductGrid products={data} />
              </div>
              <div className="col-4">
                <Sidebar cart={cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
