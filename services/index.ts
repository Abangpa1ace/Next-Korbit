import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins',
  timeout: 15000,
})

const responseBody = (res: AxiosResponse) => res.data;

const api = {
  get: (url: string, params?: object) => instance.get(url, params).then(responseBody),
}

export const getCoinMarkets = async (page: number, per_page = 50, vs_currency = 'krw') => {
  const params = { page, per_page, vs_currency, price_change_percentage: '1h,24h,7d' }
  return await api.get('/markets', { params })
}

export const getCoinDetail = async (id: string) => await api.get(`/${id}`)
