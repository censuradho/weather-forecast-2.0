import queryString from 'querystring'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { lat, lon } = req.query
      const appid = process.env.WEATHER_API_KEY

      const query = queryString.stringify({
        appid,
        lat,
        lon,
        units: 'metric',
        lang: 'pt_br'
      })

      const url = `https://api.openweathermap.org/data/2.5/weather?${query}`

      const response = await fetch(url)

      const data = await response.json()

      res.status(200).json(data)
    } catch (err) {
      res.status(401).json(err as any)
    }
  }
}
