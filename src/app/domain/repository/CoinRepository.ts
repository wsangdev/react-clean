import { CoinEntity } from "../entitys/coin.entity";

export interface CoinRepository {
  // Listar todas las Cryptos 
  getCoinList(page: number, limit:number) : Promise<CoinEntity[]>

  // Listar Detalles de las Cryptos 
  getCoinDetails(id: string): Promise<CoinEntity>
}