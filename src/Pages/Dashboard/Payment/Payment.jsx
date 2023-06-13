import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useSelectedClass from "../../../components/Hooks/useSelectedClass";

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);

const Payment = () => {
    const [selectedClass] = useSelectedClass();
    const total = selectedClass.reduce((sum , item)=> sum + item.price , 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-72">
            <p className="font-bold text-[#c25934]">Please process to</p>
            <h3 className="text-4xl font-bold text-[#0c4b65] mb-20">Payment here..</h3>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
