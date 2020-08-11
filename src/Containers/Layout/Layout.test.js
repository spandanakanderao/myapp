import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducers'
import rootSaga from '../../sagas';
import Layout from './Layout';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const listData = [{ id: 1, title: 'Title', body: 'Body' }];

describe('<Layout />', () => {

    it('Renders successfully without error', () => {
        const LayoutComponent = render(<Provider store={store}><Layout /></Provider>);
        expect(LayoutComponent.container).toBeTruthy();
    });

    it('Renders successfully without error', () => {
        const SearchBarComponent = render(<SearchBar />);
        expect(SearchBarComponent.container).toBeTruthy();
    });
    it('Renders successfully without error', () => {
        const SearchResultsComponent = render(<SearchResults {...{listData}} />);
        expect(SearchResultsComponent.container).toBeTruthy();
    });
})