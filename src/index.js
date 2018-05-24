import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout'
import FourYearPlan from './components/FourYearPlan'

window.onload = () => {
  ReactDOM.render(<FourYearPlan />, document.getElementById('bottom'));
};
