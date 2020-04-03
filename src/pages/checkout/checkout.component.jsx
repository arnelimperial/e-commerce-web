import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


const CheckOutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
        }
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning'>
            *Please use the following for test card for payments*
            <br/>
            Acct. #: 4242 42424 2424 2424 - Exp: 01/20 - CVV: 123 
        </div>
        <StripeCheckoutButton price={total} />

    </div>

);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

});

export default connect(mapStateToProps)(CheckOutPage);
