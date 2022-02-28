import React, { useState } from 'react'
import TableFilter from './TableFilter'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

type Props = {
  coinList: CoinType[];
  tab: TabMenuType;
  page: number;
  perPage: number;
  setTab: (tab: TabMenuType) => void;
  updateCoinList: (page: number, perPage: number) => void;
}

const Table: React.FC<Props> = ({ coinList, tab, page, perPage, setTab, updateCoinList }) => {
  return (
    <div className="children:pl-2 children:pr-10">
      <TableFilter tab={tab} setTab={setTab} />
      <TableHeader />
      {coinList.map(coin => <TableItem key={coin.id} coin={coin} />)}
      <button className="w-full py-4 border-b border-b-gray-200 border-solid text-center" onClick={() => updateCoinList(page+1, perPage)}>+ 더보기</button>
    </div>
  )
}

export default Table