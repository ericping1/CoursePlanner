import React from 'react';
import Quarter from './Quarter'
import '../static/css/style.css'

export default class OneYearPlan extends React.Component {
  render () {
    return (
      <div>
        <tr>
          <th>
            <Quarter qt="FA"/>
          </th>
          <th>
            <Quarter qt="WI"/>
          </th>
          <th>
            <Quarter qt="SP"/>
          </th>
        </tr>
      </div>
    )
  }
}
