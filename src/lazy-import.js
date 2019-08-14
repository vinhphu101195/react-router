import React, { Component } from "react";

// lazy import
var chooseLocation = () => {
  return import("./Location").then(mod => {
    this.setstate(() => ({
      location: mod.default
    }));
  });
};

/************** */

//DynamicImport

class DynamicImport extends Component {
  state = {
    component: null
  };
  componentDidMount() {
    this.props.load().then(mod =>
      this.setState(() => ({
        component: mod.default
      }))
    );
  }

  render() {
    return this.props.children();
  }
}

//import Home from "./Home";
// import Setting from './Setting';
const Settings = props => (
  <DynamicImport load={() => import("./Setting")}>
    {Component =>
      Component === null ? <h1>Loading!</h1> : <Component {...props} />
    }
  </DynamicImport>
);
