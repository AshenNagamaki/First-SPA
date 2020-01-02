import React from 'react';

import classes from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={classes.ContactUsLogo}>
            <p className={classes.ContactUsTitle}>CONTACT US</p>
            <p className={classes.ContactUsPart}>
                Please feel free to contact us if you have any questions, if you need any further information or to make suggestions as to how a process might be improved.
            </p>
            <footer className={classes.ContactsFooter}>
                <div className={classes.ContactsFooterElement}>
                    <strong>Customer Service Team</strong>
                    <br></br>
                    <strong>1-132-965-7840</strong>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 6:00PM CT</p>
                </div>
                <div className={classes.ContactsFooterElement}>
                    <strong>Corporate Office</strong>
                    <p>5647 Southwest Parkway</p>
                    <p>Austin, TX 85042</p>
                </div>
                <div className={classes.ContactsFooterElement}>
                    <strong>Footwear Flagship Store</strong>
                    <p>145 S. Congress Avenue</p>
                    <p>Austin, TX 85673</p>
                    <p>1-132-257-0671</p>
                </div>
            </footer>
        </div>
    );
};

export default Contacts;