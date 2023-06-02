import config from "../config";
import DataOverview from "../entity/DataOverview";
import pgp from "pg-promise";

export default class ResidentialPropertiesService {
  constructor() {}

  async getDataOverviewByJobId(job_id : number) {
    const connection = pgp()(config.database);
    const residential_properties_data = await connection.query(`
        SELECT 
            job_id,
            DATE(datetime) AS date,
            ROUND(AVG(price), 2) AS average_price,
            ROUND(AVG(price) FILTER (WHERE rent_type = 'monthly'), 2) AS average_price_by_rent_type_monthly,
            ROUND(AVG(price) FILTER (WHERE rent_type = 'daily'), 2) AS average_price_by_rent_type_daily,
            ROUND(AVG(price) FILTER (WHERE housing_type = 'apartamento'), 2) AS average_price_by_apartamento,
            ROUND(AVG(price) FILTER (WHERE housing_type = 'sobrado'), 2) AS average_price_by_sobrado,
            ROUND(AVG(price) FILTER (WHERE housing_type = 'casa'), 2) AS average_price_by_casa,
            ROUND(AVG(price) FILTER (WHERE housing_type = 'studio'), 2) AS average_price_by_studio,
            ROUND(AVG(price) FILTER (WHERE housing_type = 'quitinete'), 2) AS average_price_by_quitinete,
            ROUND(AVG(size_m2), 2) AS average_size_in_m2,
            ROUND(AVG(bedroom_count), 2) AS average_bedroom_count,
            ROUND(AVG(parking_count), 2) AS average_parking_count
        FROM 
            public.rent_data
        WHERE 
            job_id = $1
        GROUP BY
            job_id, 
            DATE(datetime);
    `, [job_id]);

    const data_row = residential_properties_data[0]; 

    const data_overview = new DataOverview(
      data_row.job_id,
      data_row.date,
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
    await connection.$pool.end();
    return data_overview;
  }
  async getDataOverview() {
    const connection = pgp()(config.database);
    const residential_properties_data = await connection.query(`
    SELECT
    job_id,
    DATE(datetime) AS date,
    ROUND(AVG(price), 2) AS average_price,
    ROUND(AVG(price) FILTER (WHERE rent_type = 'monthly'), 2) AS average_price_by_rent_type_monthly,
    ROUND(AVG(price) FILTER (WHERE rent_type = 'daily'), 2) AS average_price_by_rent_type_daily,
    ROUND(AVG(price) FILTER (WHERE housing_type = 'apartamento'), 2) AS average_price_by_apartamento,
    ROUND(AVG(price) FILTER (WHERE housing_type = 'sobrado'), 2) AS average_price_by_sobrado,
    ROUND(AVG(price) FILTER (WHERE housing_type = 'casa'), 2) AS average_price_by_casa,
    ROUND(AVG(price) FILTER (WHERE housing_type = 'studio'), 2) AS average_price_by_studio,
    ROUND(AVG(price) FILTER (WHERE housing_type = 'quitinete'), 2) AS average_price_by_quitinete,
    ROUND(AVG(size_m2), 2) AS average_size_in_m2,
    ROUND(AVG(bedroom_count), 2) AS average_bedroom_count,
    ROUND(AVG(parking_count), 2) AS average_parking_count
FROM 
    public.rent_data
GROUP BY
    job_id,
    DATE(datetime);

    `, []);

    const data_overview_array: DataOverview[] = [];

    for (const data_row of residential_properties_data){
      const data_overview = new DataOverview(
        data_row.job_id,
        data_row.date,
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
      data_overview_array.push(data_overview)
    }    
    await connection.$pool.end();
    return data_overview_array;
  }
}
