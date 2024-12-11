
export class CoinApi {
  async fetchCoin(params: Record<string, string>): Promise<any[]> {
    const queryString = new URLSearchParams(params).toString()
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?${queryString}`);
    if(!response.ok) {
      throw new Error("Error traendo la data de coinGeko")
    }
    return await response.json();
  }
} 