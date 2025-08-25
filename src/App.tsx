import './App.css'
import Spoiler from './components/Spoiler.tsx'

function App() {

	return (
		<div>
			<h1> Don't spoil me </h1>
			<p> Star Wars </p>
			<Spoiler secret={'Darth Vader är Lukes pappa!'} />

			<p> Harry Potter </p>
			<Spoiler secret={'Snape kills Dumbledore'} />

		</div>
	)
}

export default App
