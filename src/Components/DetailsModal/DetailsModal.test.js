import React from 'react';
import { render, getByRole, fireEvent } from '@testing-library/react';
import DetailsModal from './DetailsModal';

const detailsData = {data:[{id: 1, title:'title', body:'body'}], editDetails:jest.fn(), cancel:jest.fn()}

describe('<DetailsModal />', () => {

    it('Renders successfully without error', () => {
        const detailsComponent = render(<DetailsModal {...detailsData}/>);
        expect(detailsComponent.container).toBeTruthy();
    }); 
    it('Should render edit button', () => {
        const { getByRole } = render(<DetailsModal {...detailsData} />);
        const editButton = getByRole('button', { name: /edit/i });
        fireEvent.click(editButton);
        const cancelButton = getByRole('button', { name: /cancel/i });
        fireEvent.click(cancelButton);
    });

})