import React from 'react'
import Selector from '../../common/Selector'

type Props = {
  tab: TabMenuType;
  setTab: (tab: TabMenuType) => void;
}

const TableFilter: React.FC<Props> = ({ tab, setTab }) => {
  return (
    <div className="flex justify-end items-center h-16">
      <Selector />
      <Selector className="ml-10" />
      <Selector className="ml-10" />
    </div>
  )
}

export default TableFilter