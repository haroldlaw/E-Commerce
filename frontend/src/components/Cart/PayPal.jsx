import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = ({ amount, onSuccess, onError }) => {
    return <PayPalScriptProvider options={{ "client-id": "ASXa4BJia2cAjvPO23zYlNoTMPvuVaCi19ARykwIkTM-wISPyDF2D3hS8U-Q6WtthJGrQ6UxlZNfeCcu" }}>
        <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        { amount: { value: amount } },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(onSuccess);
            }}
            onError={onError}
        />
    </PayPalScriptProvider>
}

export default PayPal