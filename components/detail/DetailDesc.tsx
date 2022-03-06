import React, { useState } from 'react'

interface Props {
  coinData: CoinDetail;
}

const DetailDesc: React.FC<Props> = ({ coinData }) => {
  const [showDesc, setShowDesc] = useState<boolean>(false);
  const { description: { ko, en } } = coinData
  const hasDesc = !!ko || !!en;

  return (
    <>
      {hasDesc && <div>
        <div onClick={() => setShowDesc(!showDesc)} className="py-[15px] border-b border-solid border-gray-300 text-center cursor-pointer">
          {showDesc ? '설명닫기 ▲' : '설명보기 ▼'}
        </div>
        {showDesc && <p className="max-h-[800px] py-[40px] leading-7 overflow-y-auto">
            {(ko || en).split('\n').map((s,i) => <span key={`${i}-line`}>{s}<br/></span>)}
          </p>
        }
      </div>}
    </>
  )
}

export default DetailDesc