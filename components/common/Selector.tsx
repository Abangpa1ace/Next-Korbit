import React from 'react'

type Props = {
  className?: string;
}

const Selector: React.FC<Props> = ({ className }) => {
  return (
    <select className={className}>
      <option>첫번째</option>
      <option>두번째</option>
      <option>세번째</option>
    </select>
  )
}

export default Selector