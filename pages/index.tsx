import axios from 'axios';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Table from '../components/home/Table';
import TabMenu from '../components/home/TabMenu';
import { getCoinMarkets } from '../services';

type Props = {
  initList: CoinType[];
}

export const getStaticProps = async () => {
  const initList = await getCoinMarkets(1);
  
  return {
    props: { initList }
  }
}

const Home: NextPage<Props> = ({ initList }) => {
  const [tab, setTab] = useState<TabMenuType>('total');
  const [coinList, setCoinList] = useState<CoinType[]>(initList);
  const [page, setPage] = useState<number>(2);
  const [perPage, setPerPage] = useState<number>(10);

  console.log(coinList);

  const updateCoinList = async (newPage: number, newPerPage: number): void => {
    if (newPage !== page) setPage(newPage);
    if (newPerPage !== perPage) setPerPage(newPerPage);
    const newList = await getCoinMarkets(page, perPage);
    setCoinList(page === 1 ? newList : [...coinList, ...newList])
  }

  useEffect(() => {
    if (tab === 'total') return;
    (async () => {
      const newList = await getCoinMarkets(3);
      setCoinList(newList);
    })()
  }, [tab])

  return (
    <div>
      <TabMenu tab={tab} setTab={setTab} />
      <Table tab={tab} setTab={setTab} coinList={coinList} page={page} perPage={perPage} updateCoinList={updateCoinList} />
    </div>
  )
}

export default Home;


