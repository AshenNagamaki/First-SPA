import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

import classes from './PaymentBox.module.css'


const PaymentBox = () => {
    const [ validationData, setValidationData ] = useState({
        holderName: '',
        number: '',
        expirationDate: '',
        securityCode: ''
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

    return (
        <section className={classes.PaymentBoxWrapper}>

            <p id="paymentDetails" className={classes.PaymentBoxTitle}>• Credit / Debit Card Details</p>

            <form className={classes.PaymentBox}>

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
                    <input disabled={!valid} type="submit" value="Pay Now"/>
                </div>

            </form>
        </section>
    )
};

export default PaymentBox;