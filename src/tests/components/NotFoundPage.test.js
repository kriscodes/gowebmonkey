import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import NotFoundPage from '../../components/NotFoundPage';
import toJson from 'enzyme-to-json';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});