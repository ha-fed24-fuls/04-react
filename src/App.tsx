import './App.css'
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

		</div>
	)
}

export default App
