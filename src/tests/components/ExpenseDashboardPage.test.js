import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import toJson from 'enzyme-to-json';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});