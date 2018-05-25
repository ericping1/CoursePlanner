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

  addItem(e) {
    var quarter = this.props.qt;
    // Add future logic here
    alert("WARNING!!!: The course ".concat(this._inputElement.value)
        .concat(" is usually not offered in the ").concat(this.props.qt)
        .concat(" quarter. Double check your course schedule!"));

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
