import React from 'react'

import '../css/styles.css'

import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
