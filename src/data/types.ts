export type Callback = () => void;

// Skapa ett interface med namnet "Animal" för att beskriva objekt som har egenskaperna "name" och "species"
// Interface är som ett kontrakt - beskriver vad som måste finnas i ett objekt
export interface Animal {
	name: string;
	species: string;
}


// Data från API
export interface ApiData {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;  // <-- denna vill vi ha
}
/*
Detta fick vi efter testkörning:
{
  "categories": [],
  "created_at": "2020-01-05 13:42:26.991637",
  "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
  "id": "7RZlHORARYim6JblC1J8iA",
  "updated_at": "2020-01-05 13:42:26.991637",
  "url": "https://api.chucknorris.io/jokes/7RZlHORARYim6JblC1J8iA",
  "value": "Chuck Norris' tears can cure cancer. Too bad he never cries..."
}
*/