import { useState } from 'react'
import type { Callback } from '../data/types'

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0)

	const handleCount: Callback = () => {
		setCount(count + 1)
	}

	return (
		<section className="framed">
			<h2> Counter </h2>
			<button onClick={handleCount}> Öka värdet </button>
			<p> Värdet är: {count} </p>
		</section>
	)
}

export default Counter
