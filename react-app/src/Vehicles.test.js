import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import Vehicles from './Vehicles';

configure({ adapter: new Adapter() });

describe('Vehicles', () => {
    it('should render', () => {
        const vehicles = mount(<Vehicles />);
        expect(EnzymeToJson(vehicles)).toMatchSnapshot();
    });
});