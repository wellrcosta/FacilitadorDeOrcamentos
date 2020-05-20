import React from 'react';
import { PlusSquare } from 'react-feather';

import Colors from '../../colors';

export default function AddItem(props) {
	return (
		<div className='Main'>
			<PlusSquare
				color={Colors('green', props.theme)}
				onClick={props.addFunction(props.codProduto)}
			/>
		</div>
	);
}
