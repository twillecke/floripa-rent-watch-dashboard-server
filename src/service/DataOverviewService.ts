import config from "../config";
import DataOverview from "../domain/entity/DataOverview";
import pgp from "pg-promise";
import DataOverviewRepository from "../domain/repository/DataOverviewRepository";

export default class ResidentialPropertiesService {
  constructor(readonly dataOverviewRepository: DataOverviewRepository) {}

  async getDataOverviewByJobId(week : number) {
    const data_overview = await this.dataOverviewRepository.findAllByJobId(week);
    return data_overview;
  }
  async getDataOverview() {
    const data_overview_array = await this.dataOverviewRepository.findAll();
    return data_overview_array;
  }
}
