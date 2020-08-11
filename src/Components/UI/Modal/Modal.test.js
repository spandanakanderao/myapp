import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';

describe('<Modal />', () => {

    it('Renders successfully without error', () => {
        const modalComponent = render(<Modal><Fragment /></Modal>);
        expect(modalComponent.container).toBeTruthy();
    });

    it('It should render Backdrop component', () => {
        const backdropComponent = render(<Backdrop />);
        expect(backdropComponent.container).toBeTruthy();
    });

})