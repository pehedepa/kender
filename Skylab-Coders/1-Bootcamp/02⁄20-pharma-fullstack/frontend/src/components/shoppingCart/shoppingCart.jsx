/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './shoppingCart.scss';

export function ShoppingCart({ cartItems }) {
  let totalAmount;
  return (
    <section className="purchase__container">
      <h3>MI CARRO: </h3>
      <div className="price-lane__container">
        <h2>TOTAL</h2>
        <h4>
          {cartItems.length}
          {' '}
          productos
        </h4>
        <h2>{+totalAmount}</h2>
      </div>
    </section>
  );
}

function mapStateToProps({ cartItems }) {
  return { cartItems };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
