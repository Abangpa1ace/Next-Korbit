import React from 'react'

interface Props {
  list: SelectList;
  selectValue: number | string;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
  name?: string;
  className?: string;
}

const Selector: React.FC<Props> = ({ name, list, selectValue, onSelect, className }) => {
  return (
    <select name={name} className={className} value={selectValue} onChange={onSelect}>
      {list.map(({ label, value }, idx) => 
        <option key={`${idx+1}-option-${value}`} value={value}>{label}</option>
      )}
    </select>
  )
}

export default Selector