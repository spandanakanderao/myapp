import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {

    it('Renders successfully without error', () => {
    const searchResults = render(<SearchBar />);
    expect(searchResults.queryByPlaceholderText('Enter search keyword')).toBeTruthy();
    })
})
