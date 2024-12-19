// utils/getExchangeRate.ts
export const getExchangeRate = async (): Promise<number> => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    return data.rates.NGN;
  };
  