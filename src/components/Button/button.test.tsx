import * as React from 'react';
import { Button } from './button';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button', () => {
    test('should match snapshot', () => {
        const component = shallow(
            <Button onClick={() => {}}>
                <div>foo</div>
            </Button>,
        );
        expect(toJson(component)).toMatchSnapshot();
    });
});
