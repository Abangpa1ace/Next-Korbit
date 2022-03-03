import React, { useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { likedCoinIdsAtom, likedCoinsAtom } from '../jotai'

const useLikeStar = (coin: CoinType) => {
  const [likedCoins, setLikedCoins] = useAtom(likedCoinsAtom);
  const likedCoinIds = useAtomValue(likedCoinIdsAtom);
  const [isLiked, setIsLiked] = useState<boolean>(likedCoinIds.includes(coin.id));

  const toggleIsLiked = () => {
    const newList = isLiked ? likedCoins.filter(c => c.id !== coin.id) : [...likedCoins, coin];
    setIsLiked(!isLiked);
    setLikedCoins(newList);
  }

  return { isLiked, toggleIsLiked }
}

export default useLikeStar