import React from 'react'
import { TAB_LIST } from '../../constants'

type Props = {
  tab: TabMenuType;
  setTab: (tab: TabMenuType) => void;
}


const TabMenu: React.FC<Props> = ({ tab, setTab }) => {
  const tabName = {
    'total': '가상자산 시세 목록',
    'bookmark': '북마크 목록'
  }

  return (
    <div className='flex'>
      {TAB_LIST.map(t => (
        <div key={t} onClick={() => setTab(t)}
          className={`w-full py-2 rounded text-center font-bold cursor-pointer hover:opacity-70 ${t !== tab ? 'text-gray-400 bg-gray-200' : 'text-black'}`} >
          {tabName[t]}
        </div>
      ))}
    </div>
  )
}

export default TabMenu