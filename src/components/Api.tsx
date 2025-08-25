import { useState } from "react"
import { fetchData } from "../data/chuckApi"
import type { ApiData, Callback } from "../data/types"


const Api: React.FC = () => {
	const [data, setData] = useState<null | ApiData>(null)


	const handleClick: Callback = async () => {
		const apiData: ApiData = await fetchData()
		setData(apiData)
	}

	return (
		<section className="framed">
			<button onClick={handleClick}> Be API:et om data </button>

			<p> {data ? data.value : 'Ingen data.' } </p>
		</section>
	)
}

export default Api
