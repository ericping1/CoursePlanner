import React from 'react';
import CourseItems from './CourseItems';
import "../static/css/style.css"

export default class CourseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  /**
   * Gets the number of hours a week a course takes on average
   * @param  {string} course The name of the course
   * @return {int} Number of hours course is expected to take, or placeholder
   */
  getNumHours(course) {
    return 3;
  }

  /**
   * Checks if course is typically offered the quarter stated
   * @param  {string} course  Course we are searching for
   * @param  {string} quarter Quarter the course would be offered
   * @return {boolean} whether the course probably will be offered then
   */
  checkCourseValid(course, quarter) {
    return true;
  }

  addItem(e) {
    // Check whether course is offered during quarter
    var isValid = this.checkCourseValid(this._inputElement.value,
        this.props.qt)

    if (!isValid) {
      alert("WARNING!!!: The course ".concat(this._inputElement.value)
          .concat(" is usually not offered in the ").concat(this.props.qt)
          .concat(" quarter. Double check your course schedule!"));
    }

    this.props.timeChangeCallback(this.getNumHours(this._inputElement.value));


    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    this.props.timeChangeCallback(-1 * this.getNumHours(this._inputElement.value));

    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return(
      <div className="courseListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder={this.props.qt.concat(" course")}>
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <CourseItems entries={this.state.items}
            delete={this.deleteItem}/>
      </div>
    );
  }
}
