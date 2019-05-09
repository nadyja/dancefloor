import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ControlsPane from './index';
import Form from '../../components/Form';

describe('<ControlsPane />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((<ControlsPane dimensions={{ columns: 4, rows: 5 }} onSubmit={()=>{}} />), div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render the Form', () => {
    const renderedComponent = shallow(<ControlsPane dimensions={{ columns: 4, rows: 5 }} onSubmit={()=>{}} />);
    expect(renderedComponent.html()).toContain('Generate');
  });
});
