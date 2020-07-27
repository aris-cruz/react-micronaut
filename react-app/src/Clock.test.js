import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import Clock from './Clock';

configure({ adapter: new Adapter() });

describe('Clock', () => {
    it('should render', () => {
        const clock = mount(<Clock />);
        expect(EnzymeToJson(clock)).toMatchSnapshot();
    });
});