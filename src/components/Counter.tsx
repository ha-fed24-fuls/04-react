import { useState } from 'react'
import type { Callback } from '../data/types'

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0)
	const [isDark, setIsDark] = useState<boolean>(false)

	const handleCount: Callback = () => {
		setCount(count + 1)
	}

	const handleThemeChange: Callback = () => {
		setIsDark( !isDark )
	}

	// Skapa en variabel för klassnamnet som ska användas
	let sectionClass: string = 'framed'
	let buttonText: string = 'Byt till dark mode'

	if( isDark ) {
		sectionClass += ' dark'
		buttonText = 'Byt till light mode'
	}


	return (
		<section className={sectionClass}>
			<h2> Counter </h2>
			<button onClick={handleCount}> Öka värdet </button>
			<p> Värdet är: {count} </p>

			<button onClick={handleThemeChange}> {buttonText} </button>
		</section>
	)
}

export default Counter
