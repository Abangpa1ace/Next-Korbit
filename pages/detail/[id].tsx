import React, { useRef } from 'react'
import { useAtomValue } from 'jotai';
import { likedCoinsAtom } from '../../jotai';
import { useRouter } from 'next/router'
import useLikeStar from '../../hooks/useLikeStar';
import StarLikeButton from '../../components/common/StarLikeButton';
import { NextPage, GetServerSideProps } from 'next';
import { getCoinDetail } from '../../services';

interface Props {
  coinData: CoinType;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const coinData = await getCoinDetail(id);

  return {
    props: { coinData }
  }
}

const DetailPage: NextPage<Props> = ({ coinData }) => {
  const likedCoinList = useAtomValue(likedCoinsAtom);
  const { isLiked, toggleIsLiked } = useLikeStar(coinData);
  console.log(coinData);

  return (
    <div>
      <div className='flex flex-wrap'>
        <StarLikeButton isLiked={isLiked} toggleIsLiked={toggleIsLiked}/>
        <img src={coinData.image.thumb} />
      </div>
    </div>
  )
}

export default DetailPage