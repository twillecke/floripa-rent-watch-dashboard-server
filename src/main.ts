import express from "express";
import pgp from "pg-promise";
import config from "./config";
import ResidentialProperty from "./entity/ResidentialProperty";

const app = express();
const connection = pgp()(config.database)
app.get("/residential-properties", async function (req, res){
    const residential_properties_data = await connection.query("select * from public.rent_data LIMIT 10", []);
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
                property_data.date_of_scrap,
                property_data.cond_price,
                property_data.iptu_price,
                property_data.size_in_m2,
                property_data.bedroom_count,
                property_data.parking_count,
                property_data.bathroom_count
                ))
    }
    res.json(residential_properties)
})
app.listen(config.server.port);

