

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/Authprovider";

const CheckOutForm = ({price}) => {
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError , setCardError] = useState('');
  const [clientSecret , setClientSecret] = useState('');
  const [axiosSecure] = useAxiosSecure();


  useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{price})
    .then(res =>{
      setClientSecret(res.data.clientSecret);
    })
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('error', error);
        setCardError(error.message);
      } else {
        setCardError('');
        console.log('PaymentMethod', paymentMethod);
      }

      
     const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret , {
    payment_method: {
      card: card,
      billing_details: {
        name: user?.displayName || 'unknown',
        email: user?.email || 'unknown'
      },
    },
  })
  if(confirmError){
    console.log(confirmError);
  }

  console.log( 'paymentIntent', paymentIntent);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm mt-10 w-full bg-[#efcf4f] font-bold" type="submit" disabled={!stripe }>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-5">{cardError}</p>}
    </div>
  );
};

export default CheckOutForm;