import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_5Qkmlyhf59pXJjEUNzfOGu1B00drxJtkXr';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='AI E-Store'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
        

    );
};

export default StripeCheckoutButton;
