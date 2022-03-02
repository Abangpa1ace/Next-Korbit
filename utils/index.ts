export const toCurrency = (num: number, unit = 'krw'): string => {
  return `${unit === 'krw' ? '₩' : '$'} ${num?.toLocaleString()}`; 
}

export const toRound = (num: number, round = 0): string => {
  const dec = Math.pow(10, round);
  return `${(Math.round(num * dec) / dec)}`
}

export const percentColor = (percent: number): string => {
  return percent >= 0 ? 'text-red-500' : 'text-blue-600';
}