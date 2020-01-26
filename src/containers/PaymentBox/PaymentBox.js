import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

import classes from './PaymentBox.module.css';
import { useStore } from '../../hooks-store/store';

const PaymentBox = () => {

    const dispatch = useStore()[1];

    const [ validationData, setValidationData ] = useState({
        emailAddress: '',
        number: '',
        expirationDate: '',
        securityCode: '',
        purchaseData: JSON.parse(localStorage.getItem('currentCart'))
    });

    const itemUpdateHandler = ( event, itemOnUpdate ) => {
        const updatedItemValue = event.target.value;
        setValidationData(prevState => ({
            ...prevState,
            [itemOnUpdate]: updatedItemValue
        }));
        event.preventDefault();
    };

    const valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(validationData.emailAddress) && 
        /^\d+$/.test(validationData.number.replace(/ /g,'')) && 
        /^\d+$/.test(validationData.expirationDate.replace(/ /g,'').split('/').join('')) && 
        /^\d+$/.test(validationData.securityCode);


    const submitPaymentHandler = ( event ) => {
        event.preventDefault();
        const url = 'https://footwear-c379c.firebaseio.com/customersData/payments.json';
        const abortController = new AbortController();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(validationData)
        }, { signal: abortController.signal });
        dispatch('CLEAR_CART');
        return () => {
            abortController.abort();
        };
    };

    return (
        <section className={classes.PaymentBoxWrapper}>

            <p id="paymentDetails" className={classes.PaymentBoxTitle}>• Credit / Debit Card Details</p>

            <form className={classes.PaymentBox} onSubmit={submitPaymentHandler}>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="emailField">* E-Mail Address</label>
                    <input id="emailField" type="email" name="E-Mail Address" required onChange={( event ) => itemUpdateHandler(event, 'emailAddress')}/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="cardNumberField">* Card Number</label>
                    <NumberFormat id="cardNumberField" placeholder="Enter Card Number" format="#### #### #### ####" mask="_" required onChange={( event ) => itemUpdateHandler(event, 'number')}/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="expirationDateField">* Expiration Date</label>
                    <NumberFormat id="expirationDateField" placeholder="MM / YY" format="## / ##" mask={['M', 'M ', 'Y', 'Y']} required onChange={( event ) => itemUpdateHandler(event, 'expirationDate')}/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="securityCodeField">* Security Code (CVV)</label>
                    <NumberFormat id="securityCodeField" placeholder="XXX" format="###"  mask={['X', 'X', 'X']} required onChange={( event ) => itemUpdateHandler(event, 'securityCode')}/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <input disabled={!valid} type="submit" value="Pay Now"/>
                </div>

            </form>
        </section>
    )
};

export default PaymentBox;