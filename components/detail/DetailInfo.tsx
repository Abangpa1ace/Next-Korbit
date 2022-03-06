import React from 'react'
import { percentColor, toCurrency, toRound } from '../../utils';

interface Props {
  coinData: CoinDetail;
  unit: UnitType;
}

const DetailInfo: React.FC<Props> = ({ coinData, unit }) => {
  const { 
    market_cap_rank, 
    links, 
    market_data: { current_price, market_cap_change_percentage_24h, price_change_percentage_24h, market_cap, total_volume }, 
    symbol 
  } = coinData;

  const percentList = [market_cap_change_percentage_24h, price_change_percentage_24h].map(p => +toRound(p, 1))

  return (
    <section className="flex flex-wrap justify-between my-[40px]">
      <article className="w-55% h-[140px] border border-solid border-gray-300">
        <div className="flex h-[50%] border-b border-solid border-gray-300">
          <p className="w-30% leading-[70px] text-center bg-gray-100 font-bold">시가총액 Rank</p>
          <p className="pl-[20px] leading-[70px]">Rank #{market_cap_rank}</p>
        </div>
        <div className="flex h-[50%]">
          <p className="w-30% leading-[70px] text-center bg-gray-100 font-bold">웹사이트</p>
          <p className="pl-[20px] leading-[70px]">
            <a href={links.homepage[0]} target="blank">{links.homepage[0]}</a>
          </p>
        </div>
      </article>
      <article className="flex flex-col justify-between w-45%">
        <div className="text-[14px] text-right">
          <p className="mb-[4px] font-bold">
            <span className="mr-[16px] text-[24px]">{toCurrency(current_price[unit], unit)}</span>
            <span className={`${percentColor(percentList[0])}`}>{percentList[0]}%</span>
          </p>
          <p>
            <span className="mr-[20px] text-gray-400">{`1.000000 ${symbol}`}</span>
            <span className={`${percentColor(percentList[1])}`}>{percentList[1]}%</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-[40px] justify-end text-[13px] text-right">
          <div>
            <p>시가총액</p>
            <p>{toCurrency(market_cap[unit], unit)}</p>
          </div>
          <div>
            <p>24시간 거래대금</p>
            <p>{toCurrency(total_volume[unit], unit)}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default DetailInfo