import { animals } from "../data/animals.ts"

const AnimalList: React.FC = () => {

	return (
		<section className="framed">
			{animals.map(animal => (
				<div key={animal.species}>
					{animal.name} är en {animal.species}
				</div>
			))}
		</section>
	)
}

export default AnimalList
