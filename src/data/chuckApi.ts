// https://api.chucknorris.io/jokes/random

import type { ApiData } from "./types";

async function fetchData(): Promise<ApiData> {
	const response: Response = await fetch('https://api.chucknorris.io/jokes/random')
	const data: any = await response.json()

	// Varning! Detta är osäkert - på onsdag går vi igenom ett bättre sätt!
	return data as ApiData
}

export { fetchData }
