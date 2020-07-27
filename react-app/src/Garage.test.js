import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import Garage from './Garage';

configure({ adapter: new Adapter() });

describe('Garage', () => {
    it('should render', () => {
        const garage = mount(<Garage />);
        expect(EnzymeToJson(garage)).toMatchSnapshot();
    });
});