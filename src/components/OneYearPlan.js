import React from 'react';
import Quarter from './Quarter'
import '../static/css/style.css'

export default class OneYearPlan extends React.Component {
  render () {
    return (
      <div>
        <table id="planningTable">
          <tr>
            <td>
              <Quarter qt="FA"/>
            </td>
            <td>
              <Quarter qt="WI"/>
            </td>
            <td>
              <Quarter qt="SP"/>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
