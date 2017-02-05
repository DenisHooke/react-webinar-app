import React, { Component, PropTypes } from 'react';

const productShape = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
};

class Product extends Component {
  static propTypes = {
    info: PropTypes.shape(productShape).isRequired
  };

  render() {
    const { info } = this.props;

    return (
      <div className="product">
        <div className="image">
          <img src={info.image} />
        </div>
        <div className="info">
          <h5 className="title">{info.title}</h5>
          <small className="description">{info.description}</small>
        </div>
      </div>
    );
  }
}

export default Product;
