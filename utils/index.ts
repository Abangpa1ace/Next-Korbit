type CurrencyType = {
  [k in UnitType]: string
}

export const toCurrency = (num: number, unit: keyof CurrencyType): string => {
  const unitChar: CurrencyType = {
    krw: '₩',
    usd: '$',
  }
  return `${unitChar[unit] || ''} ${num?.toLocaleString()}`; 
}

export const sortBy = (arr: any[], key: string, isAsc = true) => {
  const newArr = arr.sort((a,b) => a[key] < b[key] ? -1 : 1);
  return isAsc ? newArr : newArr.reverse();
}

export const toRound = (num: number, round = 0): string => {
  const dec = Math.pow(10, round);
  return `${(Math.round(num * dec) / dec)}`
}

export const percentColor = (percent: number): string => {
  return percent >= 0 ? 'text-red-500' : 'text-blue-600';
}