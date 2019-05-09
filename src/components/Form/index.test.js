import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button';
import Input from './Input';
import Form from './index';

describe('<Form />', () => {
  it('should render two inputs and a button', () => {
    const renderedComponent = shallow(<Form dimensions={{ columns: 4, rows: 5 }} handleSubmit={()=>{}} handleChange={()=>{}} />);
    expect(renderedComponent.find(Input).length).toBe(2);
    expect(renderedComponent.find(Button).length).toBe(1);
  });
});
