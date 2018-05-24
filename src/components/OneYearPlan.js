import React from 'react';
import Quarter from './Quarter'
import '../static/css/style.css'

export default class OneYearPlan extends React.Component {
  render () {
    return (
      <div>
        <tr>
          <th>
            <Quarter />
          </th>
          <th>
            <Quarter />
          </th>
          <th>
            <Quarter />
          </th>
          <th>
            <Quarter />
          </th>
        </tr>
      </div>
    )
  }
}
