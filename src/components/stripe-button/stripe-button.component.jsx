//For more info about StripeCheckout component
//visit github page of react-stripe-checkout

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;   //stripe wants price in cents
    const publishableKey = 'pk_test_51GviPnGBv7fZCERmDsvjWCMynwX2SG8Ey2Xq0vSwj9n1vzVVUm13Y2S4Q2asqfXCvpL9Dlu4Az6Mts1Wkh2AfLoh00QoN1lqfb';
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='crwn-clothing'
            billingAddress={true}
            shippingAddress={true}
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;