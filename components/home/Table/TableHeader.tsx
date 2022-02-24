import React from 'react'

const TableHeader: React.FC = () => {
  return (
    <ul className="flex justify-between gap-10px py-1 bg-gray-100 text-gray-400 text-sm rounded-sm" >
      <li className="w-5%"></li>
      <li className="w-10%">자산</li>
      <li className="w-10%"></li>
      <li className="w-15% text-right">Price</li>
      <li className="w-15% text-right">1H</li>
      <li className="w-10% text-right">24H</li>
      <li className="w-10% text-right">7D</li>
      <li className="w-20% text-right">24H volume</li>
    </ul>
  )
}

export default TableHeader