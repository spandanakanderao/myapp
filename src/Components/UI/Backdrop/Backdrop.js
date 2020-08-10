import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const backdrop = (props) => (
	props.show ? <div className="Backdrop" 
	onClick={props.clicked}></div> : null
);
backdrop.propTypes = {
	clicked: PropTypes.func,
	show: PropTypes.bool
}

export default backdrop;