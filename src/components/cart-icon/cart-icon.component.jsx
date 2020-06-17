import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ( {toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);