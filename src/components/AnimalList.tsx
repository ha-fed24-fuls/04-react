import { animals } from "../data/animals.ts"
import AnimalItem from "./AnimalItem.tsx"

const AnimalList: React.FC = () => {

	return (
		<section className="framed">
			{animals.map(a => (
				<AnimalItem key={a.species} animal={a} />

			))}
		</section>
	)
}

export default AnimalList
