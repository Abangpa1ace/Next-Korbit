import { atom } from 'jotai';

export const likedCoinsAtom = atom<CoinList>([]);

export const likedCoinIdsAtom = atom<string[]>((get) => {
  const coins = get(likedCoinsAtom);
  return coins?.length ? coins.map(c => c.id) : [];
})