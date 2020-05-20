import React from 'react';
import './styles.css';

export default function CategoryButton(props) {
	const style = {
		backgroundColor: props.bgColor,
		color: props.txtColor,
	};

	let product = (e) => {
		e.preventDefault();

		props.id
			? (product = props.id)
			: console.log(
					`Error in component CategoryButton. Product not defined. ${props.id}`
			  );
		localStorage.setItem('categorySelected', product);
	};

	return (
		<div className='buttonMain' style={style} onClick={product}>
			<label className='textMain'>{props.text}</label>
		</div>
	);
}
