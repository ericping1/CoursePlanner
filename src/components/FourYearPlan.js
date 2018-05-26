import React from 'react';
import OneYearPlan from './OneYearPlan'

export default class FourYearPlan extends React.Component {
  render() {
    return(
      <div id="fullWidget">
        <OneYearPlan />
        <OneYearPlan />
        <OneYearPlan />
        <OneYearPlan />
      </div>
    );
  }
}
