import React from 'react'
import Img from 'next/image';
import useLikeStar from '../../hooks/useLikeStar';
import StarLikeButton from '../../components/common/StarLikeButton';

interface Props {
  coinData: CoinDetail;
}

const DetailHeader: React.FC<Props> = ({ coinData }) => {
  const { isLiked, toggleIsLiked } = useLikeStar(coinData);
  const { image, localization, symbol } = coinData;

  return (
      <section className='relative flex flex-wrap gap-2 items-center'>
        <StarLikeButton isLiked={isLiked} onClick={toggleIsLiked}/>
        <Img src={image?.thumb} width={28} height={28} />
        <p className="text-20 font-bold">
          {`${localization.ko}(${symbol.toUpperCase()})`}
        </p>
      </section>
  )
}

export default DetailHeader