import queryString from 'querystring'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const { city } = req.query
      const appid = process.env.WEATHER_API_KEY

      const query = queryString.stringify({
        appid,
        q: city,
        lang: 'pt_br',
        units: 'metric'
      })

      const url = `https://api.openweathermap.org/data/2.5/weather?${query}`

      console.log(url)
      const response = await fetch(url)

      const data = await response.json()
      console.log(data)

      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(401).json(err as any)
    }
  }
}
