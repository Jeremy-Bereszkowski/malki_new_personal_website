import React, { Component } from "react";
import Router from "next/router";

import { URLS } from "assets/strings/urls";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push(URLS.LANDING_PAGE, URLS.ROOT);
  };

  render() {
    return <div />;
  }
}
