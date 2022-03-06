import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const likedCoinsAtom = atomWithStorage<CoinList>('likedCoins', [], {
  ...createJSONStorage(() => sessionStorage),
  delayInit: true,
});

export const likedCoinIdsAtom = atom<string[]>((get) => {
  const coins = get(likedCoinsAtom);
  return coins?.length ? coins.map(c => c.id) : [];
})