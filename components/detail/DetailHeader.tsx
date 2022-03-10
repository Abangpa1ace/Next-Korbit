import React from 'react'
import Img from 'next/image';
import useLikeStar from '../../hooks/useLikeStar';
import Selector from '../common/Selector'
import StarLikeButton from '../../components/common/StarLikeButton';
import { selectUnit } from '../../constants/list';

interface Props {
  coinData: CoinDetail;
  unit: UnitType;
  setUnit: (unit: UnitType) => void;
}

const DetailHeader: React.FC<Props> = ({ coinData, unit, setUnit }) => {
  const { isLiked, toggleIsLiked } = useLikeStar(coinData);
  const { image, localization, symbol } = coinData;

  return (
      <section className='relative flex flex-wrap gap-2 items-center'>
        <StarLikeButton isLiked={isLiked} onClick={toggleIsLiked}/>
        <Img src={image?.thumb} width={28} height={28} />
        <p className="text-20 font-bold">
          {`${localization.ko}(${symbol.toUpperCase()})`}
        </p>
        <Selector list={selectUnit} selectValue={unit} onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => setUnit(e.target.value)} 
          className="absolute right-0"
        />
      </section>
  )
}

export default DetailHeader