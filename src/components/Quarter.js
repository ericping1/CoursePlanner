import React from 'react'

export default class Quarter extends React.Component {
  render () {
    return(
      <div>
        <p>
          [ This is the {this.props.qt} ]
        </p>
      </div>
    );
  }

}
