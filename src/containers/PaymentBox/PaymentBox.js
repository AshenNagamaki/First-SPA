import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import classes from './PaymentBox.module.css';
import { useStore } from '../../hooks-store/store';

const PaymentBox = ( props ) => {

    const dispatch = useStore()[1];

    const [ validationData, setValidationData ] = useState({
        holderName: '',
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

    const valid = validationData.holderName.length >= 2 && 
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
    
    const returnHandler = ( event ) => {
        event.preventDefault();
        props.history.push('/products');
    };

    return (
        <section className={classes.PaymentBoxWrapper}>

            <p id="paymentDetails" className={classes.PaymentBoxTitle}>• Credit / Debit Card Details</p>

            <form className={classes.PaymentBox} onSubmit={submitPaymentHandler}>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="nameField">* Card Holder Name</label>
                    <input id="nameField" type="text" name="Card Holder Name" min-length="2" max-length="35" required onChange={( event ) => itemUpdateHandler(event, 'holderName')}/>
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
                    <input disabled={!valid} type="submit" value="Pay Now" onClick={returnHandler}/>
                </div>

            </form>
        </section>
    )
};

export default withRouter(PaymentBox);