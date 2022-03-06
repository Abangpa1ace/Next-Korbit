interface CoinType {
  ath: number;
  ath_change_percentage: number
  ath_date: string;
  atl: number
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  roi: any;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

type CoinList = CoinType[];

interface CoinDetail {
  additional_notices: string[];
  asset_platform_id: string;
  block_time_in_minutes: number
  categories: string[];
  coingecko_rank: number
  coingecko_score: number;
  community_data: { [K in string]: number }
  community_score: number;
  country_origin: string;
  description: { [K in string]: string }
  developer_data: { [K in string]: number | null }
  developer_score:  number;
  genesis_date: string;
  hashing_algorithm: string;
  id: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  }
  last_updated: string;
  links: { [K in string]: string[] }
  liquidity_score: number;
  localization: { [K in string]: string }
  market_cap_rank: number;
  market_data: {
    current_price: { [K in string]: number }
    market_cap: { [K in string]: number }
    total_volume: { [K in string]: number }
    market_cap_change_percentage_24h: number
    price_change_percentage_24h: number
  }
  name: string;
  platforms: object;
  public_interest_score: number;
  public_interest_stats: { [K in string]: number | null }
  public_notice: string;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: string[];
  symbol: string;
  tickers: object[];
}