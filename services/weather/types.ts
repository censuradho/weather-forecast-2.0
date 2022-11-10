
export interface Coord {
  lon: number,
  lat: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface GetWeatherResponse {
  'coord': Coord,
  'weather': Weather[],
  'base': string,
  'main': Main,
  'visibility': number,
  'wind': {
    'speed': 0.62,
    'deg': 349,
    'gust': 1.18
  },
  'rain': {
    '1h': 3.16
  },
  'clouds': {
    'all': 100
  },
  'dt': 1661870592,
  'sys': {
    'type': 2,
    'id': 2075663,
    'country': 'IT',
    'sunrise': 1661834187,
    'sunset': 1661882248
  },
  'timezone': 7200,
  'id': 3163858,
  'name': 'Zocca',
  'cod': string | number
}

export interface GetHourlyForecastResponse {
  cod: string,
  message: number,
  cnt: number,
  list: Array<
    Omit<GetWeatherResponse,
      'cod'
    > & {
      dt_txt: string
    }
  >
}

export interface HourlyForecastProps {
  lon: number;
  lat: number
}
