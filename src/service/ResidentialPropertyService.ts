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
        const connection = pgp()(config.database)
        const residential_properties_data = await connection.query(
            `select 
                job_id, address, region, city, state, housing_type, rent_type, price, datetime, cond_price, iptu_price, size_m2, bedroom_count, parking_count, bathroom_count 
                from public.rent_data where job_id = $1`,
                [job_id]);
        const residential_properties: ResidentialProperty[] = [];
        for (const property_data of residential_properties_data) {
            residential_properties.push(
                new ResidentialProperty(
                    property_data.address,
                    property_data.region,
                    property_data.city,
                    property_data.state,
                    property_data.housing_type,
                    property_data.rent_type,
                    property_data.price,
                    property_data.datetime,
                    property_data.cond_price,
                    property_data.iptu_price,
                    property_data.size_m2,
                    property_data.bedroom_count,
                    property_data.parking_count,
                    property_data.bathroom_count
                    ))
        }
        await connection.$pool.end();
        return residential_properties;
    }
}