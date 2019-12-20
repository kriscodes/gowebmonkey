import React from 'react';
import { shallow } from 'enzyme';
import PrivacyPolicyPage from '../../components/PrivacyPolicyPage';
import toJson from 'enzyme-to-json';

test('should render Privacy Policy Page correctly', () => {
    const wrapper = shallow(<PrivacyPolicyPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});