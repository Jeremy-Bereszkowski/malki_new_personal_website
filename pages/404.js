import React from "react";
import Router from "next/router";

import { URLS } from "assets/strings/urls";

export default function ErrorPage() {
    React.useEffect(() => {
        Router
            .push(URLS.LANDING_PAGE, URLS.ROOT)
            .then(()=>{});
    });

    return (
        <div />
    );
}
