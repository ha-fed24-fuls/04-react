import { useState } from "react"
import { animals } from "../data/animals.ts"
import AnimalItem from "./AnimalItem.tsx"
import type { Animal } from "../data/types.ts"

const AnimalList = () => {
	const [data, setData] = useState<Animal[]>(animals)

	const moveToTop = (species: string) => {
		// 1. hitta objektet som ska flyttas
		const animalToMove: Animal | undefined = data.find(a => a.species === species)
		if( !animalToMove ) {
			console.log('AnimalList moveToTop: hittar inte något djur att flytta')
			return  // alternativt kan man visa ett felmeddelande för användaren
		}

		// 2. gör kopia av listan, som inte innehåller objektet som ska flyttas
		const filteredAnimals: Animal[] = data.filter(a => a.species !== species)

		// 3. gör en ny lista med flyttade objektet först - och spara i state
		setData( [animalToMove, ...filteredAnimals] )
	}

	return (
		<section className="framed">
			{data.map(a => (
				<AnimalItem
					key={a.species}
					animal={a}
					moveToTop={moveToTop}
					/>

			))}
		</section>
	)
}

export default AnimalList
