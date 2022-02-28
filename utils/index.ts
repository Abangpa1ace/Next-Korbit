export const toCurrency = (num: number, unit = 'krw'): string => {
  return `${unit === 'krw' ? '₩' : '$'} ${num?.toLocaleString()}`; 
}

export const toPercentRound = (num: number, round = 0): string => {
  const dec = Math.pow(10, round);
  return `${(Math.round(num * dec) / dec)}%`
}