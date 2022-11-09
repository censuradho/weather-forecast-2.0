import queryString from 'querystring'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const {
        query: {
          lat,
          lon
        }
      } = req
      const appid = process.env.WEATHER_API_KEY

      const query = queryString.stringify({
        appid,
        lat,
        lon
      })

      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${query}`)

      const data = await response.json()

      return res.status(200).json(data)
    } catch (err) {
      res.status(401).json(err as any)
    }
  }
}
