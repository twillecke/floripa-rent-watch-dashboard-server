import express from "express";
import pgp from "pg-promise";
import config from "./config";

const app = express();
const connection = pgp()(config.database)
app.get("/residential-properties", async function (req, res){
    const residential_properties_data = await connection.query("select * from public.rent_data LIMIT 10", []);
    res.json(residential_properties_data)
})
app.listen(config.server.port);

