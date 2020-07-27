import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EnzymeToJson from 'enzyme-to-json';
import AddVehicleForm from './AddVehicleForm';

configure({ adapter: new Adapter() });

describe('AddVehicleForm', () => {
    it('should render', () => {
        const addVehicleForm = mount(<AddVehicleForm />);
        expect(EnzymeToJson(addVehicleForm)).toMatchSnapshot();
    });
});