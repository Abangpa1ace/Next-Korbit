import React, { useRef } from 'react'
import Selector from '../common/Selector'
import { selectShow, selectUnit, selectPerPage } from '../../constants/list';

interface Props {
  tab: TabMenuType;
  unit: UnitType;
  perPage: number;
  setTab: (tab: TabMenuType) => void;
  setUnit: (unit: UnitType) => void;
  setPerPage: (perPage: number) => void;
}

const TableSelect: React.FC<Props> = ({ tab, setTab, unit, setUnit, perPage, setPerPage }) => {


  const changeSelect = async ({ target: { name, value }}: React.ChangeEvent<HTMLSelectElement>) => {
    await (() => {
      switch (name) {
        case 'selectShow':
          setTab(value);
        case 'selectUnit':
          setUnit(value);
        case 'selectPerPage':
          setPerPage(+value);
        default:
          return null;
      }
    })();
  }

  return (
    <div className="flex justify-end items-center h-16">
      {tab === 'total' && 
        <>
          <Selector name="selectShow" list={selectShow} selectValue={tab} onSelect={changeSelect} />
          <Selector name="selectUnit" list={selectUnit} selectValue={unit} onSelect={changeSelect} className="ml-10" />
          <Selector name="selectPerPage" list={selectPerPage} selectValue={perPage} onSelect={changeSelect} className="ml-10" />
        </>
      }
    </div>
  )
}

export default TableSelect