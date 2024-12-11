import { CoinEntity } from "../entitys/coin.entity";
import { CoinRepository } from "../repository/CoinRepository";

export class GetCoinListUseCase {
  constructor(private coinRepository: CoinRepository) {}

  async execute(page: number, limit: number = 10): Promise<CoinEntity[]> {
    return this.coinRepository.getCoinList(page, limit)
  }
}