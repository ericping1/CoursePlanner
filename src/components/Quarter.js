import React from 'react'
import CourseList from './CourseList';

export default class Quarter extends React.Component {
  render () {
    return(
      <div>
        <tr>
          <p>
            {this.props.qt} quarter
          </p>
        </tr>
        <tr>
          <CourseList qt={this.props.qt}/>
        </tr>
      </div>
    );
  }

}
