import React from 'react';
import OneYearPlan from './OneYearPlan'

export default class FourYearPlan extends React.Component {
  render() {
    return(
      <div class='vertical'>
        <OneYearPlan />
        <OneYearPlan />
        <OneYearPlan />
        <OneYearPlan />
      </div>
    );
  }
}
