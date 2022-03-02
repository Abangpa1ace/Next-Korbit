import React from 'react'
import { toCurrency, toRound } from '../../../utils'
import StarLikeButton from '../../common/StarLikeButton';

type Props = {
  coin: CoinType;
}

const TableItem: React.FC<Props> = ({ coin }) => {
  const { name, symbol, current_price, total_volume,
    price_change_percentage_1h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_24h_in_currency 
  } = coin;

  const percentList = [price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency].map(p => +toRound(p, 1));

  const percentColor = (percent: number): string => {
    return percent >= 0 ? 'text-red-500' : 'text-blue-600';
  }

  return (
    <ul className="flex justify-between gap-10px py-4 border-b border-b-gray-200 border-solid text-sm cursor-pointer hover:bg-gray-50" >
      <li className="w-5%">
        <StarLikeButton />
      </li>
      <li className="w-10%">
        {name}
      </li>
      <li className="w-10%">
        {symbol?.toUpperCase()}
      </li>
      <li className="w-15% text-right">
        {toCurrency(current_price)}
      </li>
      <li className={`w-15% text-right ${percentColor(percentList[0])}`}>
        {percentList[0]}%
      </li>
      <li className={`w-10% text-right ${percentColor(percentList[1])}`}>
        {percentList[1]}%
      </li>
      <li className={`w-10% text-right ${percentColor(percentList[2])}`}>
        {percentList[2]}%
      </li>
      <li className="w-20% text-right">
        {toCurrency(total_volume)}
      </li>
    </ul>
  )
}

export default TableItem