import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { useAtomValue } from 'jotai/utils'
import { likedCoinIdsAtom, likedCoinsAtom } from '../jotai'

const useLikeStar = (coin: CoinType | CoinDetail) => {
  const [likedCoins, setLikedCoins] = useAtom<CoinList>(likedCoinsAtom);
  const likedCoinIds = useAtomValue(likedCoinIdsAtom);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    setIsLiked(likedCoinIds?.includes(coin.id));
  }, [likedCoinIds])

  const toggleIsLiked = () => {
    const newList = isLiked ? likedCoins.filter(c => c.id !== coin.id) : [...likedCoins, coin];
    setIsLiked(!isLiked);
    setLikedCoins(newList);
  }

  return { isLiked, toggleIsLiked }
}

export default useLikeStar