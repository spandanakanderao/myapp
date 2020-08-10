import React, { Fragment} from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<Fragment>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div 
				className={`${props.show ? 'showModal' : ''} Modal`} >
				{props.children}
			</div>
		</Fragment>
	);
} 

Modal.propTypes = {
	show: PropTypes.bool,
	modalClosed: PropTypes.func
}
export default Modal;