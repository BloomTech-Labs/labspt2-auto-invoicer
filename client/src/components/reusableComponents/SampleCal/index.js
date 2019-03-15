import React, { Component } from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { SingleDatePicker } from "react-dates";

const SampleCal = props => {
  return (
    <div>
      <SingleDatePicker
        date={props.date}
        onDateChange={date => this.setState({ date })}
        focused={props.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
      />
    </div>
  );
};

export default SampleCal;
