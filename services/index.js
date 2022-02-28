import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

export const getCoinMarkets = async (page, per_page = 10, vs_currency = 'krw') => {
  const params = { page, per_page, vs_currency, price_change_percentage: '1h,24h,7d' }
  return await axios.get(BASE_URL + '/markets', { params }).then(res => res.data)
}