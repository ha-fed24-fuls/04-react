import { useState } from "react"
import type { Callback } from '../data/types.ts'

// typen Props beskriver vad vi kan skicka till komponenten
type Props = {
	secret: string;
}

const Spoiler: React.FC<Props> = ({ secret }: Props) => {
	const [showSpoiler, setShowSpoiler] = useState<boolean>(false)

	// TypeScript kräver en "MouseEventHandler" - våran handleClick matchar det
	const handleClick: Callback = () => {
		setShowSpoiler(true)
	}

	return (
		<p>
			{showSpoiler
				? secret
				: <button onClick={handleClick}> Visa spoiler </button>
			}
		</p>
	)
}

export default Spoiler
