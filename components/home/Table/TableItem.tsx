import React from 'react'
import { toCurrency, toPercentRound } from '../../../utils'

type Props = {
  coin: CoinType;
}

const TableItem: React.FC<Props> = ({ coin }) => {
  const { name, symbol, current_price, total_volume,
    price_change_percentage_1h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_24h_in_currency 
  } = coin;

  const percentList = [price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency].map(p => toPercentRound(p, 1));

  const percentColor = (percent) => {
    
  }

  return (
    <ul className="flex justify-between gap-10px py-4 border-b border-b-gray-200 border-solid text-sm" >
      <li className="w-5%">
        별
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
      <li className="w-15% text-right">
        {percentList[0]}
      </li>
      <li className="w-10% text-right">
        {percentList[1]}
      </li>
      <li className="w-10% text-right">
        {percentList[2]}
      </li>
      <li className="w-20% text-right">
        {toCurrency(total_volume)}
      </li>
    </ul>
  )
}

export default TableItem