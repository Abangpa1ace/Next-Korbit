import React, { useState } from 'react'
import { toRound } from '../../utils';

interface Props {
  coinData: CoinDetail;
  unit: UnitType;
}

const DetailExchange: React.FC<Props> = ({ coinData, unit }) => {
  const { market_data: { current_price } } = coinData;
  const rate = current_price[unit];
  const [prices, setPrices] = useState({ currency: rate.toLocaleString(), crypto: 1 })

  const handleChange = (e) => {
    let { target: { name, value }} = e;
    const isCurrency = name === 'currency';
    value = value.split(',').join('');

    const regex = !isCurrency ? /\d/g : /^\d+\.?\d{0,8}$/g;
    if (!regex.test(value)) return;

    setPrices({
      currency: Math.floor(isCurrency ? value : value * rate).toLocaleString(),
      crypto: (isCurrency ? value / rate : value).toLocaleString(),
    })
  }

  return (
    <div className="relative mb-[40px] py-[50px] bg-gray-400 text-center">
      <span className="absolute top-[10px] left-[10px] text-[14px] font-bold">가격 계산</span>
      <div className="inline-flex flex-wrap gap-[15px] items-center h-[70px]">
        <div className="flex flex-wrap w-[300px] text-left">
          <p className="w-40% h-[70px] pl-[20px] bg-gray-200 text-[18px] font-bold leading-[70px]">BTC</p>
          <input name="crypto" value={prices.crypto} onChange={(e) => handleChange(e)} className="w-60% h-[70px] px-[15px] text-right" />
        </div>
        <p className="text-[30px]">↔️</p>
        <div className="flex flex-wrap w-[300px] text-left">
          <p className="w-40% h-[70px] pl-[20px] bg-gray-200 text-[18px] font-bold leading-[70px]">KRW</p>
          <input name="currency" value={prices.currency} onChange={(e) => handleChange(e)} className="w-60% h-[70px] px-[15px] text-right" />
        </div>
      </div>
    </div>
  )
}

export default DetailExchange