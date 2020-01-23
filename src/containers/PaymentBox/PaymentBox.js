import React from 'react';
import NumberFormat from 'react-number-format';

import classes from './PaymentBox.module.css'


const PaymentBox = () => {
    return (
        <section className={classes.PaymentBoxWrapper}>

            <p id="paymentDetails" className={classes.PaymentBoxTitle}>• Credit / Debit Card Details</p>

            <form className={classes.PaymentBox}>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="nameField">* Card Holder Name</label>
                    <input id="nameField" type="text" name="Card Holder Name" min-length="2" max-length="35" required/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="cardNumberField">* Card Number</label>
                    <NumberFormat id="cardNumberField" placeholder="Enter Card Number" format="#### #### #### ####" mask="_"/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="expirationDateField">* Expiration Date</label>
                    <NumberFormat id="expirationDateField" placeholder="MM / YY" format="## / ##" mask={['M', 'M ', 'Y', 'Y']}/>
                </div>

                <div className={classes.PaymentBoxField}>
                    <label htmlFor="securityCodeField">* Security Code (CVV)</label>
                    <NumberFormat id="securityCodeField" placeholder="XXX" format="###"  mask={['X', 'X', 'X']}/>
                </div>




                <div className={classes.PaymentBoxField}>
                    <input disabled={true} type="submit" value="Pay Now"/>
                </div>

            </form>
        </section>
    )
};

export default PaymentBox;