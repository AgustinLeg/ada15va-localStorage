import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

function App() {
	const initialNumbers = getLocalStorage('numbers') || [];
	const [value, setValue] = useState(0);
	const [numbers, setNumbers] = useState(initialNumbers);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newNumbers = [...numbers, value];
		setNumbers(newNumbers);
		setLocalStorage('numbers', newNumbers);
	};

	return (
		<div className="App">
			<h1>Clase 15 - LocalStorage</h1>
			<Counter />
			<section>
				<h2>Array de numeros</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="number"
						placeholder="Ingresar numero"
						value={value}
						onChange={(e) => setValue(Number(e.target.value))}
					/>
					<button type="submit">Agregar</button>
				</form>
				<div>
					{numbers?.map((number) => (
						<p key={number}>{number}</p>
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
