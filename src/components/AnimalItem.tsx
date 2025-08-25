import type { Animal } from "../data/types";


type Props = {
	animal: Animal;
	moveToTop: (species: string) => void;
}

const AnimalItem: React.FC<Props> = ({ animal, moveToTop }) => (
	<div>
		{animal.name} är en {animal.species}.
		<button onClick={() => moveToTop(animal.species)}> Flytta upp </button>
	</div>
)


export default AnimalItem
