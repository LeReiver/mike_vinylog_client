import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../components/dashboard/dashboard';

describe.skip('<Dashboard/>', () => {
  it('Should render without crashing', () => {
    shallow(<Dashboard/>);
  });

})