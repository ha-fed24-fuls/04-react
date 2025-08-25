import type { Animal } from "./types";

// Eftersom datan inte innehåller "id" använder vi species, som är unik
// "animals" är en lista av objekt som IMPLEMENTERAR Animal-interfacet
export const animals: Animal[] = [
	{ name: "Bella", species: "Hund" },
	{ name: "Misse", species: "Katt" },
	{ name: "Ludde", species: "Kanin" },
	{ name: "Hedvig", species: "Uggla" },
	{ name: "Sixten", species: "Häst" },
	{ name: "Nora", species: "Ko" },
	{ name: "Bosse", species: "Gris" },
	{ name: "Moa", species: "Får" },
	{ name: "Einar", species: "Get" },
	{ name: "Oskar", species: "Räv" },
	{ name: "Siri", species: "Björn" },
	{ name: "Kalle", species: "Anka" },
	{ name: "Hugo", species: "Älg" },
	{ name: "Freja", species: "Rådjur" },
	{ name: "Ture", species: "Ekorre" },
	{ name: "Alma", species: "Säl" }
]
