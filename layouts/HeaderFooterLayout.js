import React from 'react'

import Footer from "components/Footer/Footer";

export default function HeaderFooterLayout(props) {
    const {children} = props
    return (
        <>
            {children}
            <Footer />
        </>
    )
}
