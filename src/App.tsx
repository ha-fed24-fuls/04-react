import './App.css'
import Counter from './components/Counter.tsx'
import Spoiler from './components/Spoiler.tsx'

function App() {

	return (
		<div>
			<h1> React exempel </h1>
			<section className="framed">
				<h2> Don't spoil me </h2>
				<p> Star Wars </p>
				<Spoiler secret={'Darth Vader är Lukes pappa!'} />

				<p> Harry Potter </p>
				<Spoiler secret={'Snape kills Dumbledore'} />
			</section>

			<Counter />

		</div>
	)
}

export default App
