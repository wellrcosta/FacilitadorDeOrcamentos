import React from 'react';
import { PlusSquare } from 'react-feather';

import Colors from '../../colors';

export default function AddItem(props) {
	const value = props.codProduto;
	function AddItem(e) {
		e.preventDefault();
		localStorage.setItem('@SelectProduct', value);
		props.function();
	}

	return (
		<div className='Main'>
			<PlusSquare color={Colors('green', props.theme)} onClick={AddItem} />
		</div>
	);
}
