import axios from 'axios';
import { useAtomValue } from 'jotai';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Table from '../components/home/Table';
import TableSelect from '../components/home/TableSelect';
import TabMenu from '../components/home/TabMenu';
import { likedCoinsAtom } from '../jotai';
import { getCoinMarkets } from '../services';
import { sortBy } from '../utils';

interface Props {
  initPage: number;
  initList: CoinList;
}

export const getStaticProps = async () => {
  const initPage = 1;
  const list = await getCoinMarkets(initPage);
  
  return {
    props: { initPage, initList: sortBy(list, 'market_cap_rank') }
  }
}

const Home: NextPage<Props> = ({ initPage, initList }) => {
  const [coinList, setCoinList] = useState<CoinType[]>(initList);
  const likedCoinList = useAtomValue(likedCoinsAtom);
  const [tab, setTab] = useState<TabMenuType>('total');
  const [unit, setUnit] = useState<UnitType>('krw');
  const [page, setPage] = useState<number>(initPage);
  const [perPage, setPerPage] = useState<number>(50);

  const bookmarkList = likedCoinList.length ? likedCoinList.slice(0, page*10) : []

  useEffect(() => {
    (async () => {
      let newList = await getCoinMarkets(page, perPage, unit);
      newList = sortBy(newList, 'market_cap_rank');
      await setCoinList(page === 1 ? newList : [...coinList, ...newList]);
    })();
  }, [page, perPage, unit])

  const resetPage = () => setPage(1);

  const changeUnit = (unit: UnitType): void => {
    resetPage();
    setUnit(unit);
  }

  const changePerPage = (perPage: number): void => {
    resetPage();
    setPerPage(perPage)
  }

  return (
    <div>
      <TabMenu tab={tab} setTab={setTab} />
      <TableSelect tab={tab} unit={unit} perPage={perPage} setTab={setTab} setUnit={changeUnit} setPerPage={changePerPage}  />
      {tab === 'total'
        ? <Table coinList={coinList} page={page} perPage={perPage} unit={unit} setPage={(page) => setPage(page)} />
        : <Table coinList={bookmarkList} page={page} setPage={(page) => setPage(page)} noMore={page*10 >= likedCoinList.length} />
      }
    </div>
  )
}

export default Home;


