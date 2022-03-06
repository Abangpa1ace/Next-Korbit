import React, { useEffect, useRef, useState } from 'react'
import Img from 'next/image';
import useLikeStar from '../../hooks/useLikeStar';
import StarLikeButton from '../../components/common/StarLikeButton';
import { NextPage, GetServerSideProps } from 'next';
import { getCoinDetail } from '../../services';
import DetailHeader from '../../components/detail/DetailHeader';
import DetailInfo from '../../components/detail/DetailInfo';
import DetailExchange from '../../components/detail/DetailExchange';
import DetailDesc from '../../components/detail/DetailDesc';
interface Props {
  coinData: CoinDetail;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const coinData = await getCoinDetail(id);

  return {
    props: { coinData }
  }
}

const DetailPage: NextPage<Props> = ({ coinData }) => {
  const [unit, setUnit] = useState<UnitType>('krw');
  console.log(coinData);
  return (
    <div>
      <DetailHeader coinData={coinData} />
      <DetailInfo coinData={coinData} unit={unit} />
      <DetailExchange coinData={coinData} unit={unit} />
      <DetailDesc coinData={coinData} />
    </div>
  )
}

export default DetailPage