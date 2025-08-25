import type { Animal } from "../data/types";


type Props = {
	animal: Animal;
}

const AnimalItem: React.FC<Props> = ({ animal }) => (
	<div>
		{animal.name} är en {animal.species}
	</div>
)


export default AnimalItem
