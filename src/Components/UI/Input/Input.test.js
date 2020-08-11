import React from 'react';
import { render } from '@testing-library/react';
import input from './Input';

describe('<input />', () => {

    it('Renders successfully without error', () => {
        const InputComponent = render(<input />);
        expect(InputComponent.container).toBeTruthy();
      });

})