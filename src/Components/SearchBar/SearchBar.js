import React from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input/Input';
import './SearchBar.scss';

/**
 * SearchBar component contains a input field with autocomplete functionality
 */
const SearchBar = (props) => {
	/**
	 * findSearchData is called on change of data in search box
	 */
	function findSearchData(event){
		let value = event.target.value;
		let data = props.searchData;
		let result = data.filter((list) => list.title.includes(value));
		if(!value.length) return props.resultData([...data],false)
		props.resultData(result, value.length)
	}

	return (
		<div className="searchBar">
		<Input placeholder="Enter search keyword" onChange={findSearchData}/>	
		</div>
	)	
}
SearchBar.propTypes = {
	searchData: PropTypes.arrayOf(
		PropTypes.shape({
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string
	})
	),
	resultData: PropTypes.func
}
export default SearchBar;