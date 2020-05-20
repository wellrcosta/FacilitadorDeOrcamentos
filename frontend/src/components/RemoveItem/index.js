import React from 'react';
import { XSquare } from 'react-feather';

import Colors from '../../colors';

export default function AddItem(props) {
	return (
		<div className='Main'>
			<XSquare
				color={Colors('red', props.theme)}
				onClick={props.removeFunction(props.codProduto)}
			/>
		</div>
	);
}
