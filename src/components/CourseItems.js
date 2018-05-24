import React from 'react';

export default class CourseItems extends React.Component {
  createCourses(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var courseEntries = this.props.entries;
    var listItems = courseEntries.map(this.createCourses);

    return (
      <ul classname="theList">
        {listItems}
      </ul>
    );
  }
}
