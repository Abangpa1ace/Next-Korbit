import Link from 'next/link';
import React from 'react'
import useLikeStar from '../../../hooks/useLikeStar';
import { toCurrency, toRound } from '../../../utils'
import StarLikeButton from '../../common/StarLikeButton';

interface Props {
  coin: CoinType;
  unit: UnitType;
}

const TableItem: React.FC<Props> = ({ coin, unit }) => {
  const { isLiked, toggleIsLiked } = useLikeStar(coin);

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
    <Link href={`/detail/${coin.id}`}>
      <ul className="flex justify-between gap-10px py-4 border-b border-b-gray-200 border-solid text-sm cursor-pointer hover:bg-gray-50" >
        <li className="w-5%">
          <StarLikeButton isLiked={isLiked} onClick={toggleIsLiked} />
        </li>
        <li className="w-10%">
          {name}
        </li>
        <li className="w-10%">
          {symbol?.toUpperCase()}
        </li>
        <li className="w-15% text-right">
          {toCurrency(current_price, unit)}
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
          {toCurrency(total_volume, unit)}
        </li>
      </ul>
    </Link>
  )
}

export default TableItem