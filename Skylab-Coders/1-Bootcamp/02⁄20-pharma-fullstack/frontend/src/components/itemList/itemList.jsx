import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import getItems from '../../redux/actions/commerceActionCreator';
import CartButton from './cartButton';
import './itemList.scss';

export function ItemList({ shopItems, actions }) {
  useEffect(() => {
    actions.getItems();
  }, []);
  return (
    <section className="lane-item__container">
      <ul className="list__items">
        {shopItems && shopItems.map((singleItem) => (
          <li key={singleItem._id} className="product__container">
            <div className="name__container">
              <span className="name__product">{singleItem.name}</span>
            </div>
            <div className="price-cart__container">
              <span className="price__product">{singleItem.price}</span>
              <CartButton obj={singleItem} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

ItemList.propTypes = {
  shopItems: PropTypes.shape([]),
  actions: PropTypes.shape({})
}.isRequired;

function mapStateToProps({ shopItems }) {
  return { shopItems };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getItems }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
