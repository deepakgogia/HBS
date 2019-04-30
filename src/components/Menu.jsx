//import React from 'react';
import React, { Component } from "react";
import { getData, getChannelType } from "../service";
import '../main.css';
const DD = ({ id, name }) => (
  <label htmlFor={id}>
    <input type="checkbox" id={id} />
    {name}
  </label>
);

export default class Menu extends Component {
  state = {
    expanded: false,
    data: []
  };

  async componentDidMount() {
    const data = await getChannelType();
    console.log(data);
    this.setState({ data: data });
  }

  showCheckboxes = () => {
    const { expanded } = this.state;
    var checkboxes = document.getElementById("checkboxes");
    console.log(expanded + "=", checkboxes);
    if (!expanded) {
      checkboxes.style.display = "block";
      this.setState({ expanded: true });
    } else {
      checkboxes.style.display = "none";
      this.setState({ expanded: false });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="multiselect">
          <div className="selectBox" onClick={this.showCheckboxes}>
            <select>
              <option>Select an option</option>
            </select>
            <div className="overSelect" />
          </div>
          <div id="checkboxes">
            {data.map(z => {
              return <DD key={z} id={z} name={z} />;
            })}
            {/* <label htmlFor="one">
          <input type="checkbox" id="one" />First checkbox</label>
        <label htmlFor="two">
          <input type="checkbox" id="two" />Second checkbox</label>
        <label htmlFor="three">
          <input type="checkbox" id="three" />Third checkbox</label> */}
          </div>
        </div>
        <div className="maindiv">
          <div>
            <select >
              <option>Select An Option</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="user">
              <input type="checkbox" id="user" />Temp User
            </label>

            <label htmlFor="consultant">
              <input type="checkbox" id="usconsultanter" />Consultant
          </label>
          </div>
        </div>
      </>
    );
  }
}
