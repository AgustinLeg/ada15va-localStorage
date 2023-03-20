import { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(Number(localStorage.getItem('count')));

	const increment = () => {
		setCount(count + 1);
		localStorage.setItem('count', count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
		localStorage.setItem('count', count - 1);
	};

	const reset = () => {
		setCount(0);
		localStorage.setItem('count', 0);
	};

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};
