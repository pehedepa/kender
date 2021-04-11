/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { pushItemToCart } from '../../redux/actions/commerceActionCreator';
import './itemList.scss';

class cartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    // eslint-disable-next-line no-debugger
    debugger;
    this.name = this.props.obj.name;
    this.id = this.props.obj._id;
    this.stock = this.props.obj.stock;
    this.url = this.props.obj.imageUrl;
    this.price = this.props.obj.price;
  }

  clicked() {
    this.setState((change) => ({
      clicked: !change.clicked
    }));
    this.props.actions.pushItemToCart(this.name, this.id, this.url, this.stock, this.price);
  }

  render() {
    return (
      <>
        {!this.state.clicked
              && (
              <img
                role="button"
                aria-label="Play"
                className="cart__product"
                src={this.url}
                tabIndex="0"
                onClick={() => this.clicked()}
                onKeyDown={() => this.clicked()}
              />
              )}
      </>
    );
  }
}

cartButton.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    _id: PropTypes.string,
    stock: PropTypes.string,
    imageUrl: PropTypes.string
  }).isRequired
};

function mapStateToProps({ cartItems }) {
  return { cartItems };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ pushItemToCart }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(cartButton);
