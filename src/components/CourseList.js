import React from 'react';
import CourseItems from './CourseItems';
import "../static/css/style.css"

export default class CourseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // Array of items featured in list
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  /**
   * Adds to the number of hours a week a course takes on average
   * @param  {string} course The name of the course
   */
  addNumHours(course, quarter) {


    var ref = this.props.db.database().ref(course);

    ref.on("value", (function(snapshot) {
      snapshot.forEach((function(data) {
        if (quarter === data.key) {
          //alert(data.val());
          this.props.timeChangeCallback(Math.round(Number(data.val()) * 100) / 100);
        }
      }).bind(this))
    }).bind(this));


    //this.props.timeChangeCallback(2);

  }

  subNumHours(course, quarter) {
    var ref = this.props.db.database().ref(course);
    // add found boolean here

    ref.on("value", (function(snapshot) {
      snapshot.forEach((function(data) {
        if (quarter === data.key) {
          this.props.timeChangeCallback(-1 * Math.round(Number(data.val()) * 100) / 100);
        }
      }).bind(this))
    }).bind(this));

    //this.props.timeChangeCallback(-2);
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
    // Might want to first check if course exists in our database, and
    // prevent addition of new course if not

    // If course isn't usually offered during current time, alert user


    // Check that empty string wasn't accidentally entered
    if (this._inputElement.value !== '') {

      // Create new item and add it to the state state
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      // Adjust the total number of hours per week
      //this.props.timeChangeCallback(this.getNumHours(this._inputElement.value));
      this.addNumHours(this._inputElement.value, this.props.qt);

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      // Reset input element
      this._inputElement.value = "";
    }

    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {

    // Subtract from hours per week workload
    //this.props.timeChangeCallback(-1 *
        //this.getNumHours(this._inputElement.value));
    //this.subNumHours(this._inputElement.value, this.props.qt);


    var filteredItems = this.state.items.filter((function (item) {
      if (item.key === key) {
        this.subNumHours(item.text, this.props.qt);
      }

      return (item.key !== key);
    }).bind(this));

    this.setState({
      items: filteredItems
    });
  }


  componentDidUpdate() {
    localStorage.setItem(this.props.yr.concat(this.props.qt).concat("cl"), JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = localStorage.getItem(this.props.yr.concat(this.props.qt).concat("cl"))
    if(data) {
      this.setState(prevState => {
        return JSON.parse(data)
      })
    }
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
