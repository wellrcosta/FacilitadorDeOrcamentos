import React from 'react';
import { XSquare } from 'react-feather';

import Colors from '../../colors';

export default function AddItem(props) {
	function RemoveItem(e) {
		e.preventDefault();
		localStorage.setItem('@SelectProduct', props.codProduto);
		props.function();
	}
	return (
		<div className='Main'>
			<XSquare color={Colors('red', props.theme)} onClick={RemoveItem} />
		</div>
	);
}
