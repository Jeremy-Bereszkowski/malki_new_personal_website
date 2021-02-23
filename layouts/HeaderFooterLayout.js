import React from 'react'

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export default function HeaderFooterLayout(props) {
    const {children} = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
