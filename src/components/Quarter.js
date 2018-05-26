import React from 'react'
import CourseList from './CourseList';

export default class Quarter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hours: 0
    };
  }

  // Callback function for updating number of hours of work
  hoursCallback = (hoursChange) => {
    var newHours = this.state.hours += hoursChange;
    this.setState ({hours: newHours });

  }

  render () {
    return(
      <div>
        <tr>
          <h4>
            {this.props.qt} Quarter
          </h4>
          <p>
            {this.state.hours} hours per week
          </p>
        </tr>
        <tr>
          <CourseList qt={this.props.qt}
              timeChangeCallback={this.hoursCallback} />
        </tr>
      </div>
    );
  }

}
