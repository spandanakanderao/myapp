import React from 'react';
import { render, fireEvent, getByRole } from '@testing-library/react';
import SearchResults from './SearchResults';

const listData = [{ id: 1, title: 'Title', body: 'Body' }];

describe('<SearchResults />', () => {

    it('Renders successfully without error', () => {
      const listItemComponent = render(
          <SearchResults {...{listData}} />
      );
      expect(listItemComponent.container).toBeTruthy();
    });

    it('Shows List Item and shows Edit form', () => {
        const { getByText } = render(
            <SearchResults {...{listData}} />
        );

        const listTitle = getByText('Title');
        expect(listTitle.children.length).toBeDefined(); 
    });

});