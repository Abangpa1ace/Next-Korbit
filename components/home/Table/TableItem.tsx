import React from 'react'

const TableItem: React.FC = () => {
  return (
    <ul className="flex justify-between gap-10px py-4 border-b border-b-gray-200 border-solid" >
      <li className="w-5%">별</li>
      <li className="w-10%">Bitcoin</li>
      <li className="w-10%">BTC</li>
      <li className="w-15% text-right">20,654,910</li>
      <li className="w-15% text-right">0.8%</li>
      <li className="w-10% text-right">1.8%</li>
      <li className="w-10% text-right">16.7%</li>
      <li className="w-20% text-right">35,958,238,410,252</li>
    </ul>
  )
}

export default TableItem