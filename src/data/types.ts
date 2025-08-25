export type Callback = () => void;

// Skapa ett interface med namnet "Animal" för att beskriva objekt som har egenskaperna "name" och "species"
// Interface är som ett kontrakt - beskriver vad som måste finnas i ett objekt
export interface Animal {
	name: string;
	species: string;
}
