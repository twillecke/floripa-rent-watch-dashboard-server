import config from "../config";
import ResidentialProperty from "../domain/entity/ResidentialProperty";
import pgp from "pg-promise";
import ResidentialPropertyRepository from "../domain/repository/ResidentialPropertyRepository";

export default class ResidentialPropertiesService {
    constructor(readonly residentialPropertyRepository: ResidentialPropertyRepository) {
    }

    async getResidentialProperties () {
        const residential_properties = await this.residentialPropertyRepository.findAll();
        return residential_properties;
    }

    async getResidentialPropertiesByJobId (job_id: number) {
        const residential_properties = await this.residentialPropertyRepository.findAllByJodId(job_id);
        return residential_properties;
    }
}