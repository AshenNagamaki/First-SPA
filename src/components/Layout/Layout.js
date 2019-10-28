import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';

const Layout = ( props ) => {
    return (
        <Auxiliary>
            <header>Shop Contacts About Title Help CartImage</header>
            <main>{props.children}</main>
            <footer>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </Auxiliary>
    );
};

export default Layout;