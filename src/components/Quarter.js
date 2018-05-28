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


  componentDidUpdate() {
    localStorage.setItem(this.props.yr.concat(this.props.qt).concat("qt"), JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = localStorage.getItem(this.props.yr.concat(this.props.qt).concat("qt"))
    if(data) {
      this.setState(prevState => {
        return JSON.parse(data)
      })
    }
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
          <CourseList qt={this.props.qt} yr={this.props.yr}
              timeChangeCallback={this.hoursCallback} />
        </tr>
      </div>
    );
  }

}
