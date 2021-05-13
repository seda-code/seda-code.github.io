import React from 'react';
import './assets/css/style.css';

import Main from './Main';
import Header from './Header'
import Footer from './Footer';
import Slogan from './Slogan';

// import styles from './assets/css/style.css'
// import vendorStyles from './assets/vendor/icofont/icofont.min.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Slogan />

                <Main />

                <Footer />
            </div>
        );
    }
};

export default App;