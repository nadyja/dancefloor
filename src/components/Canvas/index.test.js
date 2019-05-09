import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ControlsPane from './index';
import { getTileSize, recalculateCanvasHeight } from './index';

describe('<Canvas />', () => {
  it('calculates the tileSize', () => {
    expect(getTileSize(600, { columns: 6, rows: 10 })).toBe(100);
  });
  it('calculates the canvasHeight', () => {
    expect(recalculateCanvasHeight({ columns: 6, rows: 10 }, 100)).toBe(1000);
  });

});
