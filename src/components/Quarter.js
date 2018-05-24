import React from 'react'
import CourseList from './CourseList';

export default class Quarter extends React.Component {
  render () {
    return(
      <div>
        <tr>
          <p>
            [ This is the {this.props.qt} ]
          </p>
        </tr>
        <tr>
          <CourseList />
        </tr>
      </div>
    );
  }

}
