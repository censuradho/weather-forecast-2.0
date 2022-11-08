// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${process.env.WEATHER_API_KEY}&units=metric`
      const response = await fetch(url)

      const data = await response.json()

      res.status(200).json(data)
    } catch (err) {
      res.status(400).json(err as any)
    }
  }
}
