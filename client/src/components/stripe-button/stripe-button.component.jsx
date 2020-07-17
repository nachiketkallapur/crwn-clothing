//For more info about StripeCheckout component
//visit github page of react-stripe-checkout

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;   //stripe wants price in cents
    const publishableKey = 'pk_test_51GviPnGBv7fZCERmDsvjWCMynwX2SG8Ey2Xq0vSwj9n1vzVVUm13Y2S4Q2asqfXCvpL9Dlu4Az6Mts1Wkh2AfLoh00QoN1lqfb';

    const onToken = (token) =>{
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('payment successful');
        })
        .catch(error => {
            console.log(error);
            alert(
                'There was an issue with your payment. Please make sure that you use the provided credit card'
                );
        })   
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='crwn-clothing ltd.'
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