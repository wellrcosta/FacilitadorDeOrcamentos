export default function Colors(color, mode) {
	if (mode === 'light') {
		switch (color) {
			case 'primary':
				return '#00AEEF';
			case 'secondary':
				return '#CAE9FF';
			case 'white':
				return '#FFF';
			case 'green':
				return '#409E22';
			case 'red':
				return '#EC382A';
			case 'black':
				return '#000';
			default:
				console.log('error');
		}
	}
}
