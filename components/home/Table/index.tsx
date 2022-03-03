import React, { useState } from 'react'
import TableSelect from '../TableSelect'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

interface Props {
  coinList: CoinType[];
  page: number;
  perPage?: number;
  unit?: UnitType;
  setPage: (page: number) => void;
  noMore?: boolean;
}

const Table: React.FC<Props> = ({ coinList, page, unit, setPage, noMore }) => {
  return (
    <div className="children:pl-2 children:pr-10">
      <TableHeader />
      {coinList.length ? coinList.map(coin => <TableItem key={coin.id} coin={coin} unit={unit} />) : <div className="border-b border-b-gray-200 border-solid text-center py-10">해당하는 코인이 없습니다!</div>}
      {!noMore && <button className="w-full py-4 border-b border-b-gray-200 border-solid text-center" onClick={() => setPage(page+1)}>+ 더보기</button>}
    </div>
  )
}

export default Table