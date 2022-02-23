import type { NextPage } from 'next'
import { useState } from 'react';
import TabMenu from '../components/home/TabMenu';

const Home: NextPage = () => {
  const [tab, setTab] = useState<TabMenuType>('total');
  return (
    <div>
      <TabMenu tab={tab} setTab={setTab} />
    </div>
  )
}

export default Home
