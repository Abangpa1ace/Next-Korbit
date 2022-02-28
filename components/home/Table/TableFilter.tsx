import React from 'react'

type Props = {
  tab: TabMenuType;
  setTab: (tab: TabMenuType) => void;
}

const TableFilter: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <div className="flex justify-end items-center h-16">
      {tab === 'total' ? '필터' : ''}
    </div>
  )
}

export default TableFilter