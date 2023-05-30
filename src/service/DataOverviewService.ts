import config from "../config";
import DataOverview from "../entity/DataOverview";
import pgp from "pg-promise";

export default class ResidentialPropertiesService {
  constructor() {}

  async getDataOverviewByJobId(job_id : string) {
    const connection = pgp()(config.database);
    const residential_properties_data = await connection.query(`
        SELECT 
            AVG(price) AS average_price,
            AVG(price) FILTER (WHERE rent_type = 'M') AS average_price_by_rent_type_monthly,
            AVG(price) FILTER (WHERE rent_type = 'D') AS average_price_by_rent_type_daily,
            AVG(price) FILTER (WHERE housing_type = 'apartamento') AS average_price_by_apartamento,
            AVG(price) FILTER (WHERE housing_type = 'sobrado') AS average_price_by_sobrado,
            AVG(price) FILTER (WHERE housing_type = 'casa') AS average_price_by_casa,
            AVG(price) FILTER (WHERE housing_type = 'studio') AS average_price_by_studio,
            AVG(price) FILTER (WHERE housing_type = 'quitinete') AS average_price_by_quitinete,
            AVG(size_m2) AS average_size_in_m2,
            AVG(bedroom_count) AS average_bedroom_count,
            AVG(parking_count) AS average_parking_count
        FROM 
            public.rent_data
        WHERE 
            job_id = ${job_id};
    `, []);

    const data_row = residential_properties_data[0]; 

    const data_overview = new DataOverview(
      parseFloat(data_row.average_price),
      parseFloat(data_row.average_price_by_rent_type_monthly),
      parseFloat(data_row.average_price_by_rent_type_daily),
      parseFloat(data_row.average_price_by_apartamento),
      parseFloat(data_row.average_price_by_sobrado),
      parseFloat(data_row.average_price_by_casa),
      parseFloat(data_row.average_price_by_studio),
      parseFloat(data_row.average_price_by_quitinete),
      parseFloat(data_row.average_size_in_m2),
      parseFloat(data_row.average_bedroom_count),
      parseFloat(data_row.average_parking_count)
    );
    
    console.log(data_overview);
    
    await connection.$pool.end();
    return data_overview;
  }
}
