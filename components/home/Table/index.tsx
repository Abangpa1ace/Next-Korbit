import React, { useState } from 'react'
import TableFilter from './TableFilter'
import TableHeader from './TableHeader'
import TableItem from './TableItem'

type Props = {
  tab: TabMenuType;
  setTab: (tab: TabMenuType) => void;
}

const Table: React.FC<Props> = ({ tab, setTab }) => {
  const [unit, setUnit] = useState('KRW');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  return (
    <div className="children:pl-2 children:pr-10">
      <TableFilter tab={tab} setTab={setTab} />
      <TableHeader />
      {Array.from({ length: page * count }, () => { return <TableItem /> })}
      <button className="w-full py-4 border-b border-b-gray-200 border-solid text-center" onClick={() => setPage(page+1)}>+ 더보기</button>
    </div>
  )
}

export default Table